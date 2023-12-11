
// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes);
// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].parentNode);


// Se ubica el elemento que se desea manipular. En este caso el párrafo 1

const div_grid = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9];
// console.log(div_grid);
const p1 = div_grid.childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[3];
// console.log(p1);

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


// De esta manera también puedo ubicar el elemento utilizando su ID

var parrafo1 = document.getElementById('p1');
// console.log(parrafo1);
// console.log(document.getElementById('p1'));
// console.log(parrafo1.nodeName);


// Modificar contenido de texto en el HTML

parrafo1.innerHTML= 'Este es el texto que <strong>reemplaza</strong> al que había.';  // Reemplazo el texto del componente con este, y comprende etiquetas html
//parrafo1.innerText= 'Este es el texto que <strong>reemplaza</strong> al que había.';  // Reemplazo el texto del componente con este, pero no comprende etiquetas html
//parrafo1.hidden = true; // Con true esconde el contenido del elemento, con false lo muestra


// Modificar imágenes en el HTML

var imagen = document.getElementById('img1');
// console.log(imagen);
// Utilizando la variable en donde guardo el elemento
imagen.src = 'Images/Img/dino.png';
imagen.alt = 'Esta imagen contiene un T-Rex';
// Utilizando directamente el elemento
document.getElementById('fcp1').textContent = 'Dinosaurio';


// Ubicar un elemento utilizando el NAME

// console.log(document.getElementsByName('titulo2-2'));
var titulo2 = document.getElementsByName('titulo2-2')[0];
// console.log(titulo2);
// Cambiamos el título
titulo2.textContent = 'T-REX';
// Cambiamos la fuente cambiando el css 
titulo2.style.fontFamily = "'Times New Roman', Times, serif";


// Ubicar un elemento utilizando la ETIQUETA

// console.log(document.getElementsByTagName('p'));
var parrafo2 = document.getElementsByTagName('p')[1];
// console.log(parrafo2);
// Aquí modificamos los estilos CSS
parrafo1.style.color = 'blueviolet';
parrafo1.style.textAlign = 'center';
parrafo1.style.fontSize = '30px';
parrafo1.style.backgroundColor = 'black';
parrafo1.innerText = 'Sapo Sapito Azul, el Sapo le dijo a la Rana que no sabe ni la U';
parrafo1.style.textShadow = "1px 1px 2px white";

// Crear y agregar elementos al DOM 

// Cargo el contenedor en el que se agregará el nuevo elemento, en este caso un artículo
var articulo = document.getElementById('art1');
// console.log(articulo);
// Se crea el nuevo elemento, en este caso un párrafo
var nuevoParrafo = document.createElement('p');
// Se asigna un id al párrafo
nuevoParrafo.id = 'p4';
// Se establece el contenido del párrafo
nuevoParrafo.innerText = 'Este es el nuevo párrafo.';

// Se agrega el párrafo al artículo
articulo.appendChild(nuevoParrafo);

// Ahora modificamos el estilo del nuevo párrafo
var parrafo4 = document.getElementById('p4');
// console.log(parrafo4);
parrafo4.style.color = 'red';

var contdiv = document.getElementById('grid_main');
// console.log(contdiv)

var newsectionpio = document.getElementById('seccion1');


var figure_section_new = document.createElement('figure')
figure_section_new.setAttribute("id","fig_new");
newsectionpio.appendChild(figure_section_new);

var img_sect_div_new = document.createElement('img');
img_sect_div_new.src = "Images/Img/sapoazul.jpg";
img_sect_div_new.alt = "sapoazulbonito";
img_sect_div_new.style.width = '500px';
img_sect_div_new.style.boxShadow = '2px 2px 5px black';
figure_section_new.appendChild(img_sect_div_new);

// Crear un párrafo a partir de un archivo de texto

// Se obtiene el campo de archivo
var select_file = document.getElementById("select_file");

// Se agregas un controlador de eventos al campo de archivo
select_file.addEventListener("change", function() 
    {
    // Se obtiene el archivo seleccionado
    var seleccion = select_file.files[0];

    // Se creas un nuevo objeto FileReader
    var reader = new FileReader();

    // Se agrega un controlador de eventos al objeto FileReader
    reader.addEventListener("loadend", function() {
        // Cuando la lectura se completa, se puede acceder a los datos del archivo
        var data = reader.result;

        // // Si se desea imprimir los datos del archivo por consola
        console.log(data);

        // Si se desea incorporar en un párrafo existente
        var parrafo3 = document.getElementById('p3');
        parrafo3.innerHTML = data;

    });

    // Se Lee el archivo seleccionado
    reader.readAsText(seleccion);
    }
);