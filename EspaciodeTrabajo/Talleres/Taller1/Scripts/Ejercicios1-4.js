import {mini_menu_ejercicio_5} from './Ejercicios5.js';// 1. Leer dos números desde el teclado y multiplicarlos. Mostrar el resultado por consola.

// 1. Leer dos números desde el teclado y multiplicarlos. Mostrar el resultado por consola.
let ejercicio_1 = function (a, b) {
    return a * b;
}
let mini_menu_ejercicio_1 = function(){
    let a = parseFloat(prompt("CALCULADORA DE PRODUCTOS ENTRE DOS NUMEROS: a * b\nIngrese un numero [a]: "));
    let b = parseFloat(prompt("Ingrese un numero [b]: "));
    alert(`El resultado de: ${a} x ${b} = ${ejercicio_1(a,b)}`);
} 

// 2. Leer un número desde el teclado y determinar si es par o impar.
// 3. Crear una función que determine si un número es par o impar.

let ejercicio_2 = function (a){
    if(a%2 == 0)
        return "SI es par";
    else
        return "NO es par";
}
let mini_menu_ejercicio_2 = function(){
    let a = parseFloat(prompt("DETERMINAR SI ES PAR O IMPAR: [a]\nIngrese un numero [a]: "));
    alert(`El numero: [${a}] ${ejercicio_2(a)}`);

}

// 4. Crear una lista de números desde el teclado, ingresando números hasta que el
// usuario ingrese un valor de -1. Una vez termine de ingresar los números, se deberán
// multiplicar todos los números de la lista que ocupen una posición impar. El resultado
// final debe ser añadido al final de la lista y luego se deberá mostrar la lista por consola.


let mini_menu_ejercicio_3 = function(){
    let a;
    let Numeros = [];
    let producto = 1;
    do{
        a = parseInt(prompt("LISTA DE NUMEROS Y MULTIPLICA LOS IMPARES:\nIngrese un numero [-1 para terminar]: "));
        if(!isNaN(a) && a!=-1){
            Numeros.push(a);
            if((Numeros.indexOf(a))%2 != 0)
                producto = producto * a;
        }
    }
    while(a!=-1);
    Numeros.push(producto);
    alert("Numeros: "+ Numeros);
}   


//menu
// ... (código existente)

// Añade mini_menu_ejercicio_4 al menú
let menu = function(opcion) {
    if(opcion == 1) {
        mini_menu_ejercicio_1();
    } else if(opcion == 2) {
        mini_menu_ejercicio_2();
    } else if(opcion == 3) {
        mini_menu_ejercicio_3();
    } else if(opcion == 4) {
        mini_menu_ejercicio_5();
    }
}
let opcion;
let textmenu = "Taller 1 - Kevin Cano Bañol CC.1004669851\nPRÁCTICA DE DESARROLLO DE SITIOS WEB HTML+ CSS Y JAVASCRIPT\n\n"+
"1. CALCULADORA DE PRODUCTOS ENTRE DOS NUMEROS: a * b\n2. DETERMINAR SI ES PAR O IMPAR: [a]\n"+
"3. LISTA DE NUMEROS Y MULTIPLICA LOS IMPARES\n4. CAJERO ELECTRONICO\n5. SALIR\n"+
"Ingrese un numero correpondiente a la opcion deseadada: ";
do{
    opcion = parseInt(prompt(`${textmenu}`));
    menu(opcion);
}
while(opcion != 5)


