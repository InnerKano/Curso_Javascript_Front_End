
// Función para determinar el tipo de nodo 
function tipoNodo(tipo, nombre){
    switch(tipo){
        case 1 : console.log(`El nodo ${nombre} es un Element`); break;
        case 3 : console.log(`El nodo ${nombre} es un Text`); break;
        case 8 : console.log(`El nodo ${nombre} es un Comment`); break;
        case 9 : console.log(`El nodo ${nombre} es un Document`); break; 
        default: break;
    }
}

console.log('Este es el DOM de nuestra página dom.html\n\n');

console.log('Hijos de la raiz:');
console.log(document.childNodes);  //Nodos de todo el documento
tipoNodo(document.nodeType, document.nodeName);
console.log('\n\n');

console.log('Hijos de <html>:');
console.log(document.childNodes[1].childNodes);  //Nodos del HTML
tipoNodo(document.childNodes[1].nodeType, document.childNodes[1].nodeName);
console.log('\n\n');

console.log('Hijos de <head>:');
console.log(document.childNodes[1].childNodes[0].childNodes);  //Nodos del head
tipoNodo(document.childNodes[1].childNodes[0].nodeType, document.childNodes[1].childNodes[0].nodeName);
console.log('\n\n');

console.log('Hijos de <body>:');
console.log(document.childNodes[1].childNodes[1].childNodes);  //Nodos del body
tipoNodo(document.childNodes[1].childNodes[1].nodeType, document.childNodes[1].childNodes[1].nodeName);
console.log('\n\n');

console.log('Hijos de <meta name="keywords">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes);  //Nodos del meta:keywords
tipoNodo(document.childNodes[1].childNodes[1].childNodes[0].nodeType, document.childNodes[1].childNodes[1].childNodes[0].nodeName);
console.log('\n\n');

console.log('Hijos de <meta name="description">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes);  //Nodos del meta:description
console.log('\n\n');

console.log('Hijos de <meta name="author">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes);  //Nodos del meta:author
console.log('Primer Hijo de <meta name="author">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].firstChild);  //Primer Nodo del meta:Author
console.log('Último Hijo de <meta name="author">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].lastChild);  //Último Nodo del meta:Author
console.log('Padre del nodo <meta name="author">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].parentNode);  //Nodo Padre del meta:Author
console.log('Nombre del hijo[1] del Nodo <meta name="author">:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].nodeName);  //Nombre del hijo[1] del Nodo del meta:Author: title
console.log('Próximo Nodo a la derecha de "title":');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].nextSibling);  //Próximo Nodo a la derecha de title: text
console.log('Anterior Nodo a la izquierda de "title":');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].previousSibling);  //Anterior Nodo a la izquierda de title: text
console.log('\n\n');

console.log('Primer Nodo de contenido de <body> (hijo[9] de <meta name="author">): <div>');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9]);  // Primer contenedor del <body>, es decir, el <div> cuyo id es 'grid'
console.log('Tipo de nodo <div>:');
tipoNodo(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].nodeType, document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].nodeName);
console.log('Nombre del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].nodeName);  // Nombre del Nodo <div>
console.log('No. de hijos del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].childNodes.length);  // Número de hijos del nodo <div>
console.log('Hijos del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].childNodes);  // Hijos del nodo <div>
console.log('Valor del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].nodeValue);  // Valor del nodo <div>. Aquí será null, sólo toma valor si los nodos son text o comment
console.log('No. de atributos del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].ATTRIBUTE_NODE);  // Número de atributos del nodo <div>
console.log('Atributo[0] (id) del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].id);  // Valor del atributo id de <div>
console.log('Atributo[1] (class) del nodo <div>:');
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9].className);  // Valor del atributo class de <div>. No se usa "class" porque es una palabra reservada de JS, entonces se usa la propiedad "className"
console.log('\n\n');

// Para no escribir la ubicación completa del nodo, puedo asignarla a un var o const y parto desde allí para trabajar con el Nodo
const div_grid = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[9];

console.log('Nodo <div>:');
console.log(div_grid);  // Nodo <div>
console.log('Nombre del nodo <div>:');
console.log(div_grid.nodeName);  // Nombre del nodo <div>
console.log('Id del nodo <div>:');
console.log(div_grid.id);  // Id del nodo <div>
console.log('No. de hijos del nodo <div>:');
console.log(div_grid.childNodes.length);  // Número de hijos del nodo <div>
console.log('Hijos del nodo <div>:');
console.log(div_grid.childNodes);  // Hijos del nodo <div>
console.log('\n\n');

console.log('Hijo[1] del nodo <div>: <header>');
console.log(div_grid.childNodes[1]);  // Hijo[1] del nodo <div>: <header>
console.log('Hijos del nodo <header>:');
console.log(div_grid.childNodes[1].childNodes);  // Hijos del nodo <div>
console.log('Hijo[1] del nodo <header>: <h1>');
console.log(div_grid.childNodes[1].childNodes[1].nodeName);  // Hijo[1] del nodo <header>: <h1>
console.log('Tipo del Nodo <h1>:');
tipoNodo(div_grid.childNodes[1].childNodes[1].nodeType, div_grid.childNodes[1].childNodes[1].nodeName); // Tipo del Nodo <h1>
console.log('Valor del nodo <h1>:');
console.log(div_grid.childNodes[1].childNodes[1].nodeValue);  // Valor del nodo <h1>
console.log('\n\n');

console.log('Hijo[5] del nodo <div>: <main>');
console.log(div_grid.childNodes[5]);  // Hijo[5] del nodo <div>: <main>

console.log('<div> <main> <div> <section id="seccion1"> <article> <p id="p1">');
console.log(div_grid.childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[3]); // Párrafo 1 <p id="p1">

const p1 = div_grid.childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[3];
console.log(p1);
console.log('Nombre del nodo <p>:');
console.log(p1.nodeName);  // Nombre del nodo <p>
console.log('Id del nodo <p>:');
console.log(p1.id);  // Id del nodo <p>
console.log('No. de hijos del nodo <p>:');
console.log(p1.childNodes.length);  // Número de hijos del nodo <p>
console.log('Hijos del nodo <p>:');
console.log(p1.childNodes);  // Hijos del nodo <p>
console.log('Tipo del Nodo <p>:');
tipoNodo(p1.nodeType, p1.nodeName);  // Tipo del Nodo <p>
console.log('\n\n');

console.log('Hijo[0] del nodo <p>:');
console.log(p1.childNodes[0]);  // Hijo[0] del nodo <p>
console.log('Tipo del Hijo[0] del Nodo <p>:');
tipoNodo(p1.childNodes[0].nodeType, p1.childNodes[0].nodeName);  // Tipo del Hijo[0] del Nodo <p>
console.log('Valor del Hijo[0] del Nodo <p>:');
console.log(p1.childNodes[0].nodeValue);  // Valor del Hijo[0] del Nodo <p>. Aquí si se muestra porque es de tipo Text
