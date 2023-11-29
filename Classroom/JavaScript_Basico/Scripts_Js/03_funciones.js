

/* FUNCIONES */

//var sumar = function (a, b , c=3){         // Argumento opcional. Si no lo envío toma el valor por defecto
//    return a + b + c;
//}

//var result = sumar(4, 5, 8);
//console.log(result);

//var restul1 = sumar(3, 7);
//console.log(restul1);

//console.log(sumar(4, 8));



/* FUNCIONES RECURSIVAS */

//function factorial(n){
//    if((n == 0) || (n == 1))
//       return 1;
//    else    
//       return(n * factorial(n - 1));
//}

//console.log(factorial(5));

// Otra forma asignando una función a una variable

//var factorial2 = function(n){
//    if((n == 0) || (n == 1))
//        return 1;
//    else    
//        return(n * factorial2(n - 1));
//}

//console.log(factorial2(4));


/* FUNCIONES FLECHA */

//var acceso = true;

//var accesoU = function(a){
//    return a;
//}

// esta es la misma funcion de arriba abreviada. Se una cuando la función retorna un solo valor
//var accesoU = a => a;  

//Así se hace cuando no se pasan parámetros y se retorna sólo un valor
//var accesoU = () => false;  

// Para pasar más de 1 parámetro se usa paréntesis
//var accesoU = (a,n) => console.log(`Usuario: ${n} - Acceso: ${a}`);  
//accesoU(acceso, 'Vonny');

// Para pasar más de 1 parámetro y tiene más de una instrucción

//var accesoU = (a,n) => {
//    console.log(`Usuario ${n} en ejecución`);
//    return a;
//} 

//accesoU(acceso, 'Vonny') == true
//? console.log('Usuario permitido')
//: console.log('Usuario denegado');

//var fecha = new Date();
//console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
//console.log(fecha);


/* ARREGLOS - LISTAS */

//var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
//var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

//var miArray = ["nombre", 2020, ["otro array", 23,5], miFun(true), persona]   // persona es un objeto definido previamente

// console.log(nombres[3]);     // los índices comienzan en 0 hasta n-1
// console.log(vegetales[1]);

// nombres[0] = 'José';
// vegetales[2] = 'Nabo';

// console.log(nombres[0]);
// console.log(vegetales[2]);

//console.log(nombres.length);     // tamaño del arreglo

//for(var i = 0; i <= nombres.length - 1; i++){
//    console.log(nombres[i]);
//}

//vegetales.forEach(function(elemento, indice, array){
//     console.log(elemento, indice, array);}
//     )

//console.log('Array: ' + nombres);
//console.log(nombres);

//nombres.push('Pedro');                     //agrega uno al final del arreglo
//console.log('push Pedro: ' + nombres);

//nombres.unshift('Lili');                  // agrego al principio
//console.log('unshift Lili: ' + nombres);

//nombres.pop();                            // saco el último elemento
//console.log('pop: ' + nombres);

//nombres.shift();                          // saco el primer elemento    
//console.log('shift: ' + nombres);

//nombres.shift();                          // saco el primer elemento    
//console.log('shift: ' + nombres);

//var pos = nombres.indexOf('Carlos');     // índice de un elemento
//console.log(pos);

//nombres.splice(2, 2);  // splice(i, n) elimina apartir del índice i, n elementos
//console.log(nombres);
