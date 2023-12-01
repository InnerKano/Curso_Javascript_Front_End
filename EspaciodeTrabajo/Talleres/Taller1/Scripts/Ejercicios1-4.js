
// 1. Leer dos números desde el teclado y multiplicarlos. Mostrar el resultado por consola.
ejercicio_1 = function (a,b){
    return a * b;
}
mini_menu_ejercicio_1 = function(){
    console.log("CALCULADORA DE PRODUCTOS ENTRE DOS NUMEROS: a * b");
    let a = parseFloat(prompt("CALCULADORA DE PRODUCTOS ENTRE DOS NUMEROS: a * b\nIngrese un numero [a]: "));
    let b = parseFloat(prompt("Ingrese un numero [b]: "));
    console.log(`El resultado de: ${a} x ${b} = ${ejercicio_1(a,b)}`);
} 
// 2. Leer un número desde el teclado y determinar si es par o impar.
ejercicio_2 = function (a){
    return a;
}

// 3. Crear una función que determine si un número es par o impar.


// 4. Crear una lista de números desde el teclado, ingresando números hasta que el
// usuario ingrese un valor de -1. Una vez termine de ingresar los números, se deberán
// multiplicar todos los números de la lista que ocupen una posición impar. El resultado
// final debe ser añadido al final de la lista y luego se deberá mostrar la lista por consola.



menu = function(opcion){
    if(opcion=1){
        mini_menu_ejercicio_1();
    }
    else if(opcion=2){
        console.log(ejercicio_1(2,3));
    }

}

menu(1);