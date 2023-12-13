

/* FUNCIONES */

// function restar(a, b){    
//     return a - b;
// }

// // var result = restar(4, 5);
// // console.log(result);

// console.log(restar(4, 5));


// // Otra forma asignando una función a una variable

// var sumar = function (a, b , c=3){         // Argumento opcional. Si no lo envío toma el valor por defecto
//     return a + b + c;
// }

// var result1 = sumar(4, 5, 8);
// console.log(result1);

// var restul2 = sumar(3, 7);
// console.log(restul2);

// console.log(sumar(4, 8));



// /* FUNCIONES RECURSIVAS */

// function factorial(n){
//    if((n == 0) || (n == 1))
//       return 1;
//    else    
//       return(n * factorial(n - 1));
// }

// console.log(factorial(4));


// /* FUNCIONES FLECHA */

// var acceso = true;

// function acceder(a){
//     return a;
//  }
 
//  console.log(acceder(150));

//  //esta es la misma funcion de arriba abreviada. Se una cuando la función retorna un solo valor
// acceder = a => a;  

// console.log(acceder(200));


// var acceder = function(a){
//    return a;
// }

// var acceder = a => a;  

// //Así se hace cuando no se pasan parámetros y se retorna sólo un valor

// var acceder = () => false;  

// console.log(acceder());

// // Para pasar más de 1 parámetro se usa paréntesis

// var acceder = (a,n) => console.log(`Usuario: ${n} - Acceso: ${a}`);  

// acceder(acceso, 'Vonny');

// // Para pasar más de 1 parámetro y tiene más de una instrucción

// acceder = (a,n) => {
//    console.log(`Usuario ${n} en ejecución`);
//    return a;
// } 

// console.log(acceder(acceso, 'Vonny'));


// acceder(acceso, 'Vonny') == true 
// ? console.log('Usuario permitido') 
// : console.log('Usuario denegado');


/* ARREGLOS - LISTAS */

//var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];

// var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

// console.log(nombres[3]);     // los índices comienzan en 0 hasta n-1
// console.log(vegetales[1]);

// nombres[0] = 'José';
// vegetales[2] = 'Nabo';

// console.log(nombres[0]);
// console.log(nombres);
// console.log(vegetales[2]);
// console.log(vegetales);

// console.log(nombres.length);     // tamaño del arreglo


// // RECORRER TODA LA LISTA CON FOR

// for(var i = 0; i <= nombres.length - 1; i++){
//    console.log(nombres[i]);
// }

// // RECORRER TODA LA LISTA CON FOREACH

// vegetales.forEach(function(elemento, indice, array){
//                             console.log(elemento, indice, array);}
//     )

// console.log('Array: ' + nombres);
// console.log(nombres);


// PUSH AND POP / UNSHIFT AND SHIFT

// nombres.push('Pedro');                     //agrega uno al final del arreglo
// console.log('push Pedro: ' + nombres);

// nombres.unshift('Lili');                  // agrego al principio
// console.log('unshift Lili: ' + nombres);

// nombres.pop();                            // saco el último elemento
// console.log('pop: ' + nombres);

// nombres.shift();                          // saco el primer elemento    
// console.log('shift: ' + nombres);

// nombres.shift();                          // saco el primer elemento    
// console.log('shift: ' + nombres);

// var pos = nombres.indexOf('Ana');     // índice de un elemento
// console.log(pos);

// var pos = nombres.indexOf('Luis');     // índice de un elemento
// console.log(pos);

// nombres.push('Pedro', 'María', 'Andrés'); 
// console.log('Nombres: ' + nombres);

// nombres.unshift('Lili', 'Grover', 'Vonny'); 
// console.log('Nombres: ' + nombres);

// nombres.splice(2, 3);               // splice(i, n) elimina apartir del índice i, n elementos
// console.log(nombres);


// LLENAR UNA LISTA CON DATOS DESDE EL TECLADO

// var num = [];

// for(var i = 0; i < 5; i++){
//     num[i] = prompt("Digita un número: ");   // Leer datos desde el teclado - todo entra como string
// }

// console.log(num);


// TIPOS DE DATOS EN UNA LISTA

// miFun = (a, b) => a+b;

// var miArray = ["nombre", 2020, ["otro array", 23,5], miFun(2,3)];   

// console.log(miArray);