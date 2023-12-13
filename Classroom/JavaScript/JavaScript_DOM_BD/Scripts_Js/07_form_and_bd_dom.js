/****************************************************************************/
// PREPARACIÓN DE LA VISTA DEL FORMULARIO

// Obtengo la sección 2 y la elimino
var seccion2 = document.getElementById("seccion2");
seccion2.remove();

// Se oculta el select del buscar
var select = document.getElementById("listado");
select.style.visibility = "hidden";

// Se ocultan los botones de actualizar y eliminar
var btupdate = document.getElementById("btupdate");
btupdate.style.visibility = "hidden";
var btdelete = document.getElementById("btdelete");
btdelete.style.visibility = "hidden";


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
// CREACIÓN, APERTURA Y CONFIGURACIÓN DE LA BD

// Crear o abrir la base de datos
var base_datos = window.indexedDB.open("BD_Form", 1);

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

    // Se crea un índice llamado “nombre” en el almacén de objetos. 
    // El índice apunta a la propiedad “nombre” de los objetos almacenados. 
    // { unique: false } significa que se permiten múltiples objetos con el mismo “nombre”.
    // Ahora que se tiene un índice, se puede usar para buscar objetos por “nombre”.
    objectStore.createIndex("nombre", "nombre", { unique: false });

    // Se crea un objectStore llamado “datos” con una clave primaria basada en 
    // la propiedad “nombre” de los objetos que se almacenan. Esto si se quiere otra llave.
    //var objectStore = db.createObjectStore("datos", { keyPath: "nombre" });
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
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    // Crear un objeto con los datos
    if(indice!=""){ // Registro cargado desde una búsqueda
        var datos = {
            "nombre": nombre,
            "apellido": apellido,
            "indice": parseInt(indice)
        };

        // Variable bandera para indicar que el registro ya existe
        var band = true;

    }else{ // Registro nuevo
        var datos = {
            "nombre": nombre,
            "apellido": apellido
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
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
}


/*************************************/
function buscarDatos() {

    // Para indicar que es la función buscarDatos cuando se escuche al select
    buscar_listar = 1;

    // Se limpia la lista donde se almacenarán los resultados de la búsqueda
    resultado=[];

    // Se obtener el valor del nombre
    var nombre = document.getElementById("nombre").value;

    // Se abre una transacción
    var db = base_datos.result;
    var trans = db.transaction("datos", "readonly");
    var store = trans.objectStore("datos");

    //Indica qué indice se utilizará para la búsqueda
    var index = store.index("nombre");

    // IDBKeyRange crea un rango de claves que solo incluye nombre.
    // Abre un cursor que itera sobre todos los registros con una clave que 
    // coincide con nombre y guarda las coincidencias en solicitud
    var solicitud = index.openCursor(IDBKeyRange.only(nombre));
    
    solicitud.onsuccess = function(event) {
        
        // Guarda los registros encontrados en cursor
        var cursor = event.target.result;

        if(cursor) { 
            // Obtiene el registro en data y lo guarda en la lista resultado
            data = cursor.value;
            resultado.push(data);

            // Continúa recorriendo cursor hasta que lee todos los registros
            cursor.continue();

        } else { // No hay mas coincidencias

            if(resultado.length != 0){

                if(resultado.length == 1){ // Un sólo resultado

                    // Se cargan los datos seleccionados en el formulario
                    document.getElementById("indice").value = resultado[0].indice;
                    document.getElementById("nombre").value = resultado[0].nombre;
                    document.getElementById("apellido").value = resultado[0].apellido;

                    // Se hacen visibles los botones de actualizar y eliminar
                    btupdate.style.visibility = "visible";
                    btdelete.style.visibility = "visible";
                    
                } else{ // Varios resultados

                    select.style.visibility = "visible";

                    // Se crean las opciones del select a partir de los datos obtenidos
                    var option;
                    resultado.forEach(function(element, i){
                        option = document.createElement("option");
                        option.text = `${element.nombre}  ${element.apellido}`;
                        option.value = i;
                        select.appendChild(option);
                    });
                    
                }
            }else{ // Ningún resultado
                alert("Lo lamentamos! No existe este registro en nuestra Base de Datos");
            }
        }
    };

    solicitud.onerror = function(event) {
        console.log("No se pudo obtener los datos", event);
    };
}


/*************************************/
function actualizarDatos() {

    var confirmacion = confirm("¿Estás seguro de modificar el registro?");
    if (confirmacion) {
        // Obtener los valores del formulario
        var indice = document.getElementById("indice").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;

        // Crear un objeto con los datos
        if(indice!=""){
            var datos = {            
                "nombre": nombre,
                "apellido": apellido,
                "indice": parseInt(indice)
            };

            // Se obtiene la referencia a la base de datos
            var db = base_datos.result;

            // Se inicia una transacción en la base de datos 
            var trans = db.transaction("datos", "readwrite");
            var store = trans.objectStore("datos");

            // Se modifica el registro correspondiente
            store.put(datos);

            trans.oncomplete = function() {
                alert("Datos guardados exitosamente");        
            };

            trans.onerror = function(event) {
                console.log("Error al guardar los datos:", event);
            };

            // Se limpian los valores del formulario
            document.getElementById("indice").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
        }else{
            alert('Debe buscar el registro antes de actualizarlo');
        }

    }else{
    }
}


/*************************************/
function eliminarDatos() {

    var confirmacion = confirm("¿Estás seguro de eliminar el registro?");
    if (confirmacion) {

        // Obtener los valores del formulario
        var indice = document.getElementById("indice").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;

        if(indice!=""){
            // Crear un objeto con los datos
            var datos = {            
                "nombre": nombre,
                "apellido": apellido,
                "indice": parseInt(indice)
            };

            // Se obtiene la referencia a la base de datos
            var db = base_datos.result;

            // Se inicia una transacción en la base de datos 
            var trans = db.transaction("datos", "readwrite");
            var store = trans.objectStore("datos");

            // Se elimina el registro correspondiente al índice
            store.delete(parseInt(indice));

            trans.oncomplete = function() {
                alert("Registro eliminado exitosamente");        
            };

            trans.onerror = function(event) {
                console.log("Error al eliminar el registro:", event);
            };

            // Se limpian los valores del formulario
            document.getElementById("indice").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
        }else{
            alert('Debe buscar el registro antes de eliminarlo');
        }
    }else{
    }
}


/*************************************/
function mostrarDatos() {

    // Para indicar que es la función mostrarDatos cuando se escuche al select
    buscar_listar = 2; 

    // Abrir una transacción
    var db = base_datos.result;
    var trans = db.transaction("datos", "readonly");
    var store = trans.objectStore("datos");

    //Lee todos los registros de la base de datos
    var solicitud = store.getAll();

    solicitud.onsuccess = function(event) { 
        // Se guardan todos los registros de la BD en data
        data = event.target.result;

        if(data.length != 0){ // Hay resultados

            // Se hace visible el select
            select.style.visibility = "visible";

            // Se crean las opciones del select a partir de los datos obtenidos
            var option;
            data.forEach(function(element, i){
                option = document.createElement("option");
                option.text = `${element.nombre}  ${element.apellido}`;
                option.value = i;
                select.appendChild(option);
            });

        }else{ // Ningún resultado
            alert("Lo lamentamos! Aún no existen registros en nuestra Base de Datos");
        }
    };

    solicitud.onerror = function(event) {
        console.log("No se pudo obtener los datos", event);
    };
}

/*************************************/
// Listener para actaur cuando se selecciona un elemento del select
select.addEventListener("change", function() {
    // Se obtiene el valor seleccionado en el select
    var valor = select.value;
    console.log("buscar_listar: ");  
    console.log(buscar_listar);
    // Se cargan los datos seleccionados en el formulario
    if(buscar_listar == 1){ //Buscar 

        document.getElementById("indice").value = resultado[valor].indice;
        document.getElementById("nombre").value = resultado[valor].nombre;
        document.getElementById("apellido").value = resultado[valor].apellido;

    }else if(buscar_listar == 2){ // Mostrar todo

        document.getElementById("indice").value = data[valor].indice;
        document.getElementById("nombre").value = data[valor].nombre;
        document.getElementById("apellido").value = data[valor].apellido;

    }else{        
    }

    // Se eliminan las opciones del select para limpiarlo y se oculta
    while(select.childNodes.length!=2){
        select.removeChild(select.lastChild);
    }
    select.childNodes[1].selected = "true";
    select.style.visibility = "hidden";

    // Se hacen visibles los botones de actualizar y eliminar
    btupdate.style.visibility = "visible";
    btdelete.style.visibility = "visible";
});