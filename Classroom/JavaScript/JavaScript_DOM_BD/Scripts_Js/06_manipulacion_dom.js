
// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes);
// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].parentNode);


// Se ubica el elemento que se desea manipular. En este caso el párrafo 1

// const div_grid = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9];
// // console.log(div_grid);
// const p1 = div_grid.childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[3];
// // console.log(p1);

// Info del elemento
// console.log('Nombre del nodo <p>:');
// console.log(p1.nodeName);  // Nombre del nodo <p>
// console.log('Id del nodo <p>:');
// console.log(p1.id);  // Id del nodo <p>
// console.log('Class del nodo <p>:');
// console.log(p1.className);  // Class del nodo <p>
// console.log('No. de hijos del nodo <p>:');
// console.log(p1.childNodes.length);  // Número de hijos del nodo <p>
// console.log('Hijos del nodo <p>:');
// console.log(p1.childNodes);  // Hijos del nodo <p>
// console.log('\n\n');
// console.log('Hijo[0] del nodo <p>:');
// console.log(p1.childNodes[0]);  // Hijo[0] del nodo <p>
// console.log('Valor del Hijo[0] del Nodo <p>:');
// console.log(p1.childNodes[0].nodeValue);  // Valor del Hijo[0] del Nodo <p>. Aquí si se muestra porque es de tipo Text


//De esta manera también puedo ubicar el elemento utilizando su ID

// var parrafo1 = document.getElementById('p1');
// // console.log(parrafo1);
// // console.log(document.getElementById('p1'));
// // console.log(parrafo1.nodeName);


// Modificar contenido de texto en el HTML

// parrafo1.innerHTML= 'Este es el texto que <strong>reemplaza</strong> al que había.';  // Reemplazo el texto del componente con este, y comprende etiquetas html
// //parrafo1.innerText= 'Este es el texto que <strong>reemplaza</strong> al que había.';  // Reemplazo el texto del componente con este, pero no comprende etiquetas html
// //parrafo1.hidden = true; // Con true esconde el contenido del elemento, con false lo muestra


// Modificar imágenes en el HTML

var imagen = document.getElementById('img1');
// console.log(imagen);
// // Utilizando la variable en donde guardo el elemento
// imagen.src = 'Images/Img/dino.png';
// imagen.alt = 'Esta imagen contiene un T-Rex';
// // Utilizando directamente el elemento
// document.getElementById('fcp1').textContent = 'Dinosaurio';


// Modificar un frame en el HTML

var frame = document.getElementById('pdfframe');
//console.log(frame);
// // Utilizando la variable en donde guardo el elemento
frame.src = '';
frame.clientWidth="95%";


// Ubicar un elemento utilizando el NAME

// console.log(document.getElementsByName('titulo2-2'));
// var titulo2 = document.getElementsByName('titulo2-2')[0];
// console.log(titulo2);
// // Cambiamos el título
// titulo2.textContent = 'T-REX';
// // // Cambiamos la fuente cambiando el css 
// titulo2.style.fontFamily = "'Times New Roman', Times, serif";


// Ubicar un elemento utilizando la ETIQUETA

// console.log(document.getElementsByTagName('p'));
// var parrafo2 = document.getElementsByTagName('p')[1];
// console.log(parrafo2);
// // Aquí modificamos los estilos CSS
// parrafo2.style.color = 'blueviolet';
// parrafo2.style.textAlign = 'center';


// Crear y agregar elementos al DOM 

// // Cargo el contenedor en el que se agregará el nuevo elemento, en este caso un artículo
// var articulo = document.getElementById('art1');
// console.log(articulo.childNodes);
// // Se crea el nuevo elemento, en este caso un párrafo
// var nuevoParrafo = document.createElement('p');
// // Se asigna un id al párrafo
// nuevoParrafo.id = 'p4';
// // Se establece el contenido del párrafo
// nuevoParrafo.innerText = 'Este es el nuevo párrafo.';
// console.log(nuevoParrafo);
// // // Se agrega el párrafo al artículo
// articulo.appendChild(nuevoParrafo);

// // Ahora modificamos el estilo del nuevo párrafo
// var parrafo4 = document.getElementById('p4');
// console.log(parrafo4);
// parrafo4.style.color = 'red';


// Crear un párrafo a partir de un archivo de texto

// Se obtiene el campo de archivo
var select_file = document.getElementById("select_file");

// Se agrega un controlador de eventos al campo de archivo
// event: change -> El evento de cambio se activa para los elementos cuando el usuario modifica el valor del elemento.
// 
select_file.addEventListener("change", function() {
    
  console.log(select_file.files);  

  // Se obtiene el archivo seleccionado
  var seleccion = select_file.files[0];

  // Se crea un nuevo objeto FileReader
  // El objeto FileReader permite que las aplicaciones web lean archivos (o información en buffer) 
  // almacenados en el cliente de forma asíncrona
  var reader = new FileReader();



  // Se agrega un controlador de eventos al objeto FileReader
  // event: loadend -> El progreso se ha detenido (después de que se hayan enviado "error", "abort" o "load").
  reader.addEventListener("loadend", function() {

    // Cuando la lectura se completa, se puede acceder a los datos del archivo
    // result retorna el contenido del archivo. Esta propiedad es válida únicamente 
    // después de que la operación de lectura del archivo es completada. 
    // El formato de la infomación devuelta depende de cuál de los métodos de lectura fue usado
    var data = reader.result;

    // Si se desea imprimir los datos del archivo por consola
    console.log(data);

    // Si se desea incorporar el texto en un párrafo existente
    // var parrafo3 = document.getElementById('p3');
    // parrafo3.innerHTML = data;

    // Si se desea cargar la imagen leída
    imagen.src = data;

    // Si se desea cargar un pdf leído
    // frame.src = data;
    // frame.hidden = false;

    // Se oculta el botón de carga de archivo
    select_file.style.display = "none";

  });

  // Método para leer el archivo de texto txt, csv o json seleccionado
  //reader.readAsText(seleccion);

  // Método para leer el archivo de imagen o pdf seleccionado
  reader.readAsDataURL(seleccion);

});

