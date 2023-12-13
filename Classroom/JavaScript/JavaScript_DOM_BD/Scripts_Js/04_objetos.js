

// var user = 'Vonny';

// // DEFINIR UN OBJETO
// var persona = {
//     //clave: valor
//     name : 'Leo',
//     edad: 30        
// };

// var miObj = {
//     //clave: valor
//     nombre : "Juan",
//     apellido: "Perez",
//     texto: `Usuario ${user}`,
//     texto2: function(){return `Usuario ${this.nombre}`;},
//     miFun : (a, b) => a+b,
//     otroObj : persona,
//     fecha : new Date(),
//     miAuto : [
//         'negro',
//         pintura = {
//             marca:'pintuco', 
//             precio: 20000
//         }        
//     ]
// };


// console.log(miObj);
// console.log(miObj.nombre);
// console.log(miObj.texto);
// console.log(miObj.texto2());
// console.log(miObj.miFun(2,3));
// console.log(miObj.otroObj.name);
// console.log(miObj.fecha.getFullYear());
// console.log(miObj.miAuto[1].precio);




// Destructuración de objectos:

// var {nombre, otroObj} = miObj;

// console.log(`Usuario1: ${nombre} - Persona: ${otroObj.name}`);


// // Descomposición de objectos:

// var otraFun = ({texto}, {otroObj}) => {
//    console.log(texto);
//   console.log(otroObj.name);
// }

// otraFun(miObj, miObj);


// // USO DE FUNCIONES LOS OBJETOS PROPIOS

// var fecha = new Date();
// console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
// console.log(fecha);