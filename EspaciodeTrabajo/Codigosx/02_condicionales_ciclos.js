
/* SENTENCIA IF... ELSE */

// var nombre = 'Luis';
// var edad = 11;

// // edad < 12 es un niño.
// // edad > 11, es < 18, es un adolescente.
// // edad > 17, es < 60, es un adulto.
// // edad > 60 es un anciano.


// if (edad < 12){
//     console.log(nombre + ' es un niño.');
// } else if((edad > 11) && (edad < 18)){
//     console.log(nombre + ' es un adolescente.');
// }else if((edad > 17) && (edad < 60)){
//     console.log(nombre + ' es un adulto.');
// } else {
//     console.log(nombre + ' es un anciano.');
// }



// OTRA MANERA DE IF... ELSE: Operador ternario

// var acceso = true;

// acceso == false ? console.log('Usuario permitido') : console.log('Usuario denegado');

// let edad = 23
// let esMayor = (edad > 18) ? "Mayor de edad" : "Menor de edad";
// console.log(esMayor);


/* SENTENCIA SWITCH */

 
//  var mes = 1;

//  switch(mes){
//      case 1:
//          console.log('Enero');
//          break;
//      case 2:
//         console.log('Febrero');
//         break;
//      case 3:
//         console.log('Marzo');
//         break;
//      case 4:
//         console.log('Abril');
//         break;
//      default:
//          console.log('Mes no encontrado.');
//  }






/* SENTENCIA FOR y FOREACH */


// for(var i=0; i <= 10; i+=1){   // El break rompe el for
//     console.log('rana: ',i);
// }

// var nombres = ['Juan', 'Carlos', 'Ana', 'Luisa'];
// for(var i=0; i <= 3; i+=1){   // El break rompe el for
//     console.log(nombres[i]);
// }

// var nombres = ['Juan', 'Carlos', 'Ana', 'Luisa'];
// nombres.forEach((element, i) => console.log(element, i));   // foreach es para arrays. element: array; i: índice



/* SENTANCIA WHILE */

/*
var i = 0;
while(i >= 1){
    console.log(i);
    i--;
}
console.log(i);
*/


/* SENTENCIA DO... WHILE */

/*
 var i = 1;
 do{
    console.log(i);
    i++;
 }while(i <= 10);
 console.log(i);
*/



