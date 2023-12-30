
/****************************************************************************/
// RECONFIGURACIÓN DE LA CUADRÍCULA DE LA PÁGINA

// Se obtiene el grid del main
var grid_main = document.getElementById("grid_main");

// Se definen las áreas de la cuadrícula para cada tamaño de pantalla
var areasDesktop = '"S1 S1 S1 S1" "S1 S1 S1 S1"';
var areasTablet = '"S1 S1" "S1 S1"';
var areasSmartphone = '"S1 S1"';

// Se crean los @media screen queries
var media_screen_Tablet = window.matchMedia("(max-width: 900px) and (min-width: 551px)");
var media_screen_Smartphone = window.matchMedia("(max-width: 550px)");

// Se crea la función para actualizar las áreas de la cuadrícula
function actualizarGridAreas() {
  if (media_screen_Smartphone.matches) {
    // Si la pantalla es de tamaño smartphone
    grid_main.style.gridTemplateAreas = areasSmartphone;
  } else if (media_screen_Tablet.matches) {
    // Si la pantalla es de tamaño tablet
    grid_main.style.gridTemplateAreas = areasTablet;
  } else {
    // Si la pantalla es de tamaño desktop
    grid_main.style.gridTemplateAreas = areasDesktop;
  }
}

// Se actualizan las áreas de la cuadrícula cuando la página se carga
actualizarGridAreas();

// Se actualizan las áreas de la cuadrícula cuando el tamaño de la ventana cambia
window.addEventListener("resize", actualizarGridAreas);


/****************************************************************************/


function anular() {
    window.location.reload(); // Refresca la ventana
} 

/****************************************************************************/
// CREACIÓN, APERTURA Y CONFIGURACIÓN DE LA BD

// Crear o abrir la base de datos
var base_datos = window.indexedDB.open("BD_tabla", 1);

base_datos.onerror = function(event) {
    console.log("No se pudo abrir la base de datos", event);
};

// Este es un manejador de eventos que se dispara cuando se necesita 
// una actualización en la base de datos
base_datos.onupgradeneeded = function(event) {
    var db = event.target.result;

    // Crear un objectStore para contener la información.

    // Se crea un objectStore llamado “datos” con una clave primaria por defecto
    // que se autoincrementa automáticamente
    // var objectStore = db.createObjectStore("datos", { autoIncrement : true });

    // Se crea un objectStore llamado “datos” con una clave primaria propia llamada "indice"
    // que se autoincrementa automáticamente
    var objectStore = db.createObjectStore("datos", { keyPath: "indice", autoIncrement : true });

    // Se crea un índice llamado “alimento” en el almacén de objetos. 
    // El índice apunta a la propiedad “alimento” de los objetos almacenados. 
    // { unique: false } significa que se permiten múltiples objetos con el mismo “alimento”.
    // Ahora que se tiene un índice, se puede usar para buscar objetos por “alimento”.
    objectStore.createIndex("alimento", "alimento", { unique: true });
};

//BASE DE DATOS EXISTENTE

var datosEjemplo = [
    {
        "alimento": 'Arándano',
        "calorias": '49',
        "grasas": '0.2',
        "proteina": '0.4',
        "carbohidratos": '12.7'
    },
    {
        "alimento": 'Plátano',
        "calorias": '90',
        "grasas": '0.3',
        "proteina": '1.0',
        "carbohidratos": '23.5'
    },
    {
        "alimento": 'Cereza',
        "calorias": '46',
        "grasas": '0.4',
        "proteina": '0.9',
        "carbohidratos": '10.9'
    },
    {
        "alimento": 'Fresa',
        "calorias": '37',
        "grasas": '0.5',
        "proteina": '0.8',
        "carbohidratos": '8.3'
    },
    {
        "alimento": 'Manzana',
        "calorias": '52',
        "grasas": '0.2',
        "proteina": '0.3',
        "carbohidratos": '14'
    }
];



base_datos.onsuccess = function(event) {
    console.log("Base de datos abierta exitosamente");
    /****************************************************************************/

    // Se obtiene la referencia a la base de datos
    var db = base_datos.result;

    // Se inicia una transacción en la base de datos. La transacción 
    // se realiza en el objectStore (almacén de objetos) llamado “datos”. 
    // El modo de la transacción es “readwrite”, lo que significa que la 
    // transacción puede modificar los datos en la base de datos.
    var trans = db.transaction("datos", "readwrite");

    // Se obtiene el objectStore llamado “datos” de la transacción. 
    // Un objectStore es esencialmente una tabla en la base de datos 
    // que contiene los datos.
    var store = trans.objectStore("datos");

    // Esta función intenta agregar el objeto datos al almacén de objetos. 
    // Si ya existe un objeto con la misma clave en el almacén de objetos, 
    // la operación fallará y se disparará un error.
    // Iterar sobre el array de datosEjemplo y agregar cada objeto a la base de datos
    datosEjemplo.forEach(function(dato) {
        var request = store.add(dato);

        request.onsuccess = function() {
            console.log(`Datos de ${dato.alimento} agregados exitosamente`);
        };

/*         request.onerror = function(event) {
            console.log(`Error al agregar datos de ${dato.alimento}: ${event}`);
        }; */
    });
    imprimirBD();

};


/****************************************************************************/
//IMPRIMIR BASE DE DATOS EXISTENTE
function imprimirBD() {
    var db = base_datos.result;
    var trans = db.transaction("datos", "readonly");
    var store = trans.objectStore("datos");

    // Se abre un cursor para recorrer todos los elementos del objectStore
    var cursorRequest = store.openCursor();

    // PARA ITERAR cada elemento DIOS MIO, y usando dizque while y habia uno ya predeterminado
    cursorRequest.onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {
            var indice = cursor.value.indice;
            var alimento = cursor.value.alimento;
            var calorias = cursor.value.calorias;
            var grasas = cursor.value.grasas;
            var proteina = cursor.value.proteina;
            var carbohidratos = cursor.value.carbohidratos;

            var nuevoCodigoHtml = '<tr id="data_table"><td hidden>'+ indice +'</td>'+
                '<td>'+ alimento +'</td>' +
                '<td>'+ calorias +'</td>' +
                '<td>'+ grasas + '</td>' +
                '<td>'+ proteina + '</td>' +
                '<td>'+ carbohidratos +'</td>' +
                '<td><span class="editar" onclick="transformarEnEditable(this)">Editar</span>   <span class="eliminar" onclick="deleteData(this)">Eliminar</span> </td></tr>';

            var tabla = document.getElementById('tbody_data_table');

            tabla.innerHTML += nuevoCodigoHtml;

            cursor.continue();
        }

    };
}


/****************************************************************************/
//FUNCIONES CRUD (Create/Guardar, Read/Buscar, Update/Actualizar, Delete/Eliminar)
/****************************************************************************/
// EDICIÓN DE TABLAS CREATE

var añadiendo = false;

function transformarEnEditableCreate(nodo) { //El nodo recibido es SPAN
    
    if (añadiendo == false) {
        var nodoTd = nodo.parentNode; //Nodo Td: Celda
        var nodoTr = nodoTd.parentNode; //Nodo Tr: Fila
        var nodosEnTr = nodoTr.getElementsByTagName('td');

        // Se guarda el contenido de cada celda de la fila seleccionada
        var alimento = nodosEnTr[0].textContent; 
        var calorias = nodosEnTr[1].textContent;
        var grasas = nodosEnTr[2].textContent; 
        var proteina = nodosEnTr[3].textContent;
        var carbohidratos = nodosEnTr[4].textContent; 
        var editar = nodosEnTr[5].textContent;

        // Creación del input
        var nuevoCodigoHtml = '<td><input type="text" id="alimento" value="' + alimento + '" size="10"></td>' +
        '<td><input type="text" id="calorias" value="' + calorias + '" size="5"></td>' +
        '<td><input type="text" id="grasas" value="' + grasas + '" size="5"></td>' +
        '<td><input type="text" id="proteina" value="' + proteina + '" size="5"></td>' +
        '<td><input type="text" id="carbohidratos" value="' + carbohidratos + '" size="5"></td>' + 
        '<td>Añadiendo</td>'; 

        nodoTr.innerHTML = nuevoCodigoHtml;

        var nodoBotonesForm = document.getElementById('botonesform');

        nodoBotonesForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
        '<form id = "form_botones" action="#" method="get" onsubmit="capturarEnvioCreate()" onreset="anular()">' +
        '<input class="boton" type ="submit" value="Aceptar">' + 
        '<input class="boton" type="reset" value="Cancelar"> </form>';
        
        añadiendo = "true";
    }
    else {
        alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}

function capturarEnvioCreate() {

    var nodoResultadoEnvio = document.getElementById('resultadoenvio');

    nodoResultadoEnvio.innerHTML = '<br><br><br>' +
    '<h3 id="h31" name="titulo3-1">Ejemplo de Captura y Envío</h3>' +
    '<form id = "form_captura" action="#" method="get" onreset="anular()">' +
    '<p>ALIMENTO:      ' + document.getElementById("alimento").value + '</p>' +
    '<p>CALORÍAS:      ' + document.getElementById("calorias").value + '</p>' +
    '<p>GRASAS:        ' + document.getElementById("grasas").value + '</p>' +
    '<p>PROTEÍNAS:     ' + document.getElementById("proteina").value + '</p>' +
    '<p>CARBOHIDRATOS: ' + document.getElementById("carbohidratos").value + '</p>' +
    '<input class="boton" type ="submit" value="CONTINUAR" onclick="guardarDatos()"> </form>';
   
}


var data;
var resultado=[];
var buscar_listar;

function guardarDatos() {
    var alimento = document.getElementById("alimento").value;
    var calorias = document.getElementById("calorias").value;
    var grasas = document.getElementById("grasas").value;
    var proteina = document.getElementById("proteina").value;
    var carbohidratos = document.getElementById("carbohidratos").value;

    var datos = {
        "alimento": alimento,
        "calorias": calorias,
        "grasas": grasas,
        "proteina": proteina,
        "carbohidratos": carbohidratos
    };

    var db = base_datos.result;

    var trans = db.transaction("datos", "readwrite");

    var store = trans.objectStore("datos");

    var request = store.add(datos);

    request.onsuccess = function() {
        location.reload();
        //alert("Datos guardados exitosamente");
    };

    request.onerror = function(event) {
        console.log(`Error al guardar los datos: ${event.target.error}`);
        alert("Error al guardar los datos. Consulta la consola para más detalles.");
    };

    document.getElementById("alimento").value = "";
    document.getElementById("calorias").value = "";
    document.getElementById("grasas").value = "";
    document.getElementById("proteina").value = "";
    document.getElementById("carbohidratos").value = "";
    
}
//Read/Buscar
//transformarEnEditableRead(nodo): Esta funcion se llama desde el boton buscar en el HTML
function transformarEnEditableRead(nodo) { //El nodo recibido es SPAN
    var nodoTd = nodo.parentNode; //Nodo Td: Celda
    var nodoTr = nodoTd.parentNode; //Nodo Tr: Fila
    var nodosEnTr = nodoTr.getElementsByTagName('td');

    // Se guarda el contenido de cada celda de la fila seleccionada
    var alimento = nodosEnTr[0].textContent; 
    var calorias = nodosEnTr[1].textContent;
    var grasas = nodosEnTr[2].textContent; 
    var proteina = nodosEnTr[3].textContent;
    var carbohidratos = nodosEnTr[4].textContent; 
    var editar = nodosEnTr[5].textContent;

    // Creación del input
    var nuevoCodigoHtml = '<td><input type="text" id="alimento" value="' + alimento + '" size="10"></td>' +
    '<td>'+ calorias +'</td>' +
    '<td>'+ grasas + '</td>' +
    '<td>'+ proteina + '</td>' +
    '<td>'+ carbohidratos +'</td>' +
    '<td>Buscando</td>'; 

    nodoTr.innerHTML = nuevoCodigoHtml;

    var nodoBotonesForm = document.getElementById('botonesform');

    nodoBotonesForm.innerHTML = 'Pulse Aceptar para buscar o Cancelar para volver' +
    '<form id = "form_botones" action="#" method="get" onsubmit="buscarDatos()" onreset="anular()">' +
    '<input class="boton" type ="submit" onclick"borrarBotonesForm()" value="Aceptar">' + 
    '<input class="boton" type="reset" value="Cancelar"> </form>';

}

function borrarBotonesForm(){
    var nodoBotonesForm = document.getElementById('botonesform');
    nodoBotonesForm.innerHTML = '';

}

function buscarDatos() {
    // Obtener el valor del alimento a buscar
    var alimento = document.getElementById("alimento").value;

    // Se obtiene la referencia a la base de datos
    var db = base_datos.result;

    // Se inicia una transacción de solo lectura en el objectStore "datos"
    var trans = db.transaction("datos", "readonly");
    var store = trans.objectStore("datos");

    // Obtener un índice sobre la propiedad "alimento" para realizar la búsqueda
    var index = store.index("alimento");

    // Abrir un cursor que permite recorrer los elementos en el rango especificado
    var range = IDBKeyRange.only(alimento);
    var cursorRequest = index.openCursor(range);
    

    // Función que se ejecuta con cada elemento (fila) encontrado
    cursorRequest.onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {
            // Acceder a los valores de la fila actual
            var indice = cursor.value.indice;
            var alimento = cursor.value.alimento;
            var calorias = cursor.value.calorias;
            var grasas = cursor.value.grasas;
            var proteina = cursor.value.proteina;
            var carbohidratos = cursor.value.carbohidratos;

            // Construir el HTML de la tabla
            var nuevoCodigoHtml = '<tr id="data_table"><td hidden>'+ indice +'</td>'+
                '<td>'+ alimento +'</td>' +
                '<td>'+ calorias +'</td>' +
                '<td>'+ grasas + '</td>' +
                '<td>'+ proteina + '</td>' +
                '<td>'+ carbohidratos +'</td>' +
                '<td><span class="editar" onclick="transformarEnEditable(this)">Editar</span>   <span class="eliminar" onclick="deleteData(this)">Eliminar</span> </td></tr>';

            var tabla = document.getElementById('tbody_data_table');
            
            // Verificar si la tabla se encontró correctamente
            if (tabla) {
                // Limpiar la tabla antes de agregar la nueva fila
                tabla.innerHTML = "";

                // Agregar el nuevo código HTML a la tabla
                tabla.innerHTML += nuevoCodigoHtml;
            } else {
                console.error("No se pudo encontrar la tabla con ID 'tbl'.");
            }

            // Mover al siguiente elemento
            cursor.continue();
        }
    };

    // Manejar errores si los hay
    cursorRequest.onerror = function(event) {
        console.error("Error al abrir el cursor:", event.target.error);
    };

    // Evento que se ejecuta cuando la transacción se completa
    trans.oncomplete = function() {
        console.log("Transacción completada exitosamente");
    };
}

document.querySelector('.buscar').addEventListener('click', buscarDatos);

/****************************************************************************/
//FUNCION CRUD (Update/Actualizar)
/****************************************************************************/
// EDICIÓN DE TABLAS

var editando = false;

function transformarEnEditable(nodo) { //El nodo recibido es SPAN
    if (editando == false) {
        var nodoTd = nodo.parentNode; //Nodo Td: Celda
        var nodoTr = nodoTd.parentNode; //Nodo Tr: Fila
        var nodosEnTr = nodoTr.getElementsByTagName('td');

        // Se guarda el contenido de cada celda de la fila seleccionada
        var indice =  nodosEnTr[0].textContent;
        var alimento = nodosEnTr[1].textContent; 
        var calorias = nodosEnTr[2].textContent;
        var grasas = nodosEnTr[3].textContent; 
        var proteina = nodosEnTr[4].textContent;
        var carbohidratos = nodosEnTr[5].textContent; 
        var editar = nodosEnTr[6].textContent;
        // Creación del input
        var nuevoCodigoHtml = '<td hidden><input id="indice" value="' + indice + '"></td>'+
        '<td><input type="text" id="alimento" value="' + alimento + '" size="10"></td>' +
        '<td><input type="text" id="calorias" value="' + calorias + '" size="5"></td>' +
        '<td><input type="text" id="grasas" value="' + grasas + '" size="5"></td>' +
        '<td><input type="text" id="proteina" value="' + proteina + '" size="5"></td>' +
        '<td><input type="text" id="carbohidratos" value="' + carbohidratos + '" size="5"></td>' + 
        '<td>En edición</td>'; 

        nodoTr.innerHTML = nuevoCodigoHtml;
        var nodoBotonesForm = document.getElementById('botonesform');

        nodoBotonesForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
        '<form id = "form_botones" action="#" method="get" onsubmit="capturarEnvio()" onreset="anular()">' +
        '<input class="boton" type ="submit" value="Aceptar">' + 
        '<input class="boton" type="reset" value="Cancelar"> </form>';
        
        editando = true;
    }
    else {
        alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}

function capturarEnvio() {

    var nodoResultadoEnvio = document.getElementById('resultadoenvio');

    nodoResultadoEnvio.innerHTML = '<br><br><br>' +
    '<h3 id="h31" name="titulo3-1">Ejemplo de Captura y Envío</h3>' +
    '<form id = "form_captura" action="#" method="get" onreset="anular()">' +
    '<p>ALIMENTO:      ' + document.getElementById("alimento").value + '</p>' +
    '<p>CALORÍAS:      ' + document.getElementById("calorias").value + '</p>' +
    '<p>GRASAS:        ' + document.getElementById("grasas").value + '</p>' +
    '<p>PROTEÍNAS:     ' + document.getElementById("proteina").value + '</p>' +
    '<p>CARBOHIDRATOS: ' + document.getElementById("carbohidratos").value + '</p>' +
    '<input class="boton" type ="submit" value="CONTINUAR" onclick="actualizarDatos()"> </form>';
   
}

function actualizarDatos() {
    var indice =  parseInt(document.getElementById("indice").value);
    var alimento = document.getElementById("alimento").value;
    var calorias = document.getElementById("calorias").value;
    var grasas = document.getElementById("grasas").value;
    var proteina = document.getElementById("proteina").value;
    var carbohidratos = document.getElementById("carbohidratos").value;

    // Crear un objeto con los datos
    var datos = {
        "indice": indice,
        "alimento": alimento,
        "calorias": calorias,
        "grasas": grasas,
        "proteina": proteina,
        "carbohidratos": carbohidratos
    };

    var db = base_datos.result;

    var trans = db.transaction("datos", "readwrite");
    var store = trans.objectStore("datos");

    var request = store.put(datos);

    request.onsuccess = function () {
        alert("Datos actualizados exitosamente");
        location.reload(); // Recargar la página después de actualizar
        editando = false; // Restablecer la variable editando a false
    };
    
    request.onerror = function (event) {
        console.log("Error al actualizar los datos:", event);
        alert("Error al actualizar los datos. Consulta la consola para más detalles.");
    };
    
}
/****************************************************************************/
//FUNCION CRUD (Delete/Eliminar)

function deleteData(nodo) {
    var nodoTd = nodo.parentNode; //Nodo Td: Celda
    var nodoTr = nodoTd.parentNode; //Nodo Tr: Fila
    var nodosEnTr = nodoTr.getElementsByTagName('td');

    // Se guarda el contenido de cada celda de la fila seleccionada
    var indice =  parseInt(nodosEnTr[0].textContent);
    //alert(typeof(indice));
    var db = base_datos.result;

    var trans = db.transaction("datos", "readwrite");
    var store = trans.objectStore("datos");

    var request = store.delete(indice);

    request.onsuccess = function () {
        alert("Datos eliminados exitosamente");
        location.reload(); // Recargar la página después de actualizar
    };

    request.onerror = function (event) {
        console.log("Error al eliminados los datos:", event);
        alert("Error al eliminados los datos. Consulta la consola para más detalles.");
    };
}