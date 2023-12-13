
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
// EDICIÓN DE TABLAS

var editando = false;

function transformarEnEditable(nodo) { //El nodo recibido es SPAN
    
    if (editando == false) {
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
        '<td>En edición</td>'; 

        nodoTr.innerHTML = nuevoCodigoHtml;

        var nodoBotonesForm = document.getElementById('botonesform');

        nodoBotonesForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
        '<form id = "form_botones" action="#" method="get" onsubmit="capturarEnvio()" onreset="anular()">' +
        '<input class="boton" type = "submit" value="Aceptar">' + 
        '<input class="boton" type="reset" value="Cancelar"> </form>';
        
        editando = "true";
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
    '<input class="boton" type="reset" value="CONTINUAR"> </form>';
   
}

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

base_datos.onsuccess = function(event) {
    console.log("Base de datos abierta exitosamente");
};


/****************************************************************************/
//FUNCIONES CRUD (Create/Guardar, Read/Buscar, Update/Actualizar, Delete/Eliminar)

var data;
var resultado=[];
var buscar_listar;

/*************************************/
function guardarDatos() {
    
    // Obtener los valores del formulario
    var indice = document.getElementById("indice").value;
    var alimento = document.getElementById("alimento").value;
    // Crear un objeto con los datos
    if(indice!=""){ // Registro cargado desde una búsqueda
        var datos = {
            "alimento": alimento,
            "indice": parseInt(indice)
        };

        // Variable bandera para indicar que el registro ya existe
        var band = true;

    }else{ // Registro nuevo
        var datos = {
            "alimento": alimento,
        };
    }

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
    store.add(datos);

    // Esta función también intenta agregar el objeto datos al almacén de objetos. 
    // Sin embargo, si ya existe un objeto con la misma clave, put actualizará 
    // el objeto existente con el nuevo. Put puede ser utilizado para agregar 
    // nuevos objetos o actualizar objetos existentes.
    //store.put(datos);

    trans.oncomplete = function() {
        alert("Datos guardados exitosamente");        
    };

    trans.onerror = function(event) {
        if(band==true){
            alert(`Ese registro ya existe en la Base de Datos`);
            band = false;
        }else{
            console.log(`Error al guardar los datos: ${event}`);
        }
    };

    // Se limpian los valores del formulario
    document.getElementById("indice").value = "";
    document.getElementById("alimento").value = "";
}
