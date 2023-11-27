
/* IMPRIMIR EN CONSOLA */

// console.log('Hello Word');

// console.log(5 + 5);


/* VARIABLES Y TIPOS DE DATOS */

// const nombre = 'Vonny';// CONST: Constante, no puede tomar otros valores
// console.log(nombre);
// console.log(typeof(nombre));  // String

// let sueldo1 = 1990.99;   // LET: Variable válida sólo para un ámbito específico. //NO puede ser redefinida con otro tipo
// console.log(sueldo1);
// console.log(typeof(sueldo1));  //Float


var edad = 34;       // VAR: Variable de ámbito global. Puede ser redefinida con otro tipo, y puede ser utilizada antes de ser asignada
console.log(edad);
console.log(typeof(edad));  // Int


// edad = 'cinco';  // VAR hace tipado automático, es decir, cambia el tipo dependiendo lo que ingrese
// console.log(edad);
// console.log(typeof(edad));  // String


// var puesto;           // No está asignada a ningun valor
// console.log(puesto);  // Undefined

// puesto = null;        // Ya estaba declarada antes
// console.log(puesto);  // null

// var tiene_trabajo = false;  
// console.log(tiene_trabajo);
// console.log(typeof(tiene_trabajo));  // Boolean: true o false

// let sueldo2 = 3000;   // LET: Variable válida sólo para un ámbito específico. //NO puede ser redefinida con otro tipo
// console.log(sueldo2);
// console.log(typeof(sueldo2));  //Float

/* IMPRIMIR TEXTOS Y VARIABLES */

// console.log('el sueldo es ' + sueldo1);
// console.log(`el sueldo es ${sueldo1}`);


/* OPERADORES*/

/* LÓGICOS: < > == != ! >= <=   ===  && ||*/  

// let a=5;
// let b='5';
// let c=9;
// let d=10;

// console.log(a==b); // True -- Debido a que aquí compara el valor de cada dato, JavaScript no tiene en cuenta las comillas
// console.log(a!=b); //False -- Se compara si el dato es diferente, si es diferente true
// console.log(a===b); //False -- Aquí compara el tipo de dato
// console.log(a!==b); //True  -- Aquí se compara tipo de dato

// console.log(a==b && c==d);  // Y AND
// console.log(a==b || c==d);  // O OR

// var sueldo1mayor = sueldo1 > sueldo2;
// console.log(sueldo1mayor);

// //console.log(!(sueldo1mayor));  //Negación


/* UNARIOS: incremento y decremento */

edad++;
console.log(edad);

edad--;
console.log(edad);

console.log(++edad);
console.log(edad);
console.log(edad++); // imprime y luego suma, por tanto no se ve el incremento hasta que se vuelve a imprimir
console.log(edad);

/* ASIGNACIÓN:  +=, -=, *=, /=, %= */

edad %= 2;
console.log(edad);


//CASTING DE DATOS

//Conversión de datos
/**
 * a String=>String(), toString
 * a Números => Number(), parseInt()
 * a Decimal => Number(), parseFloat() 
**/

//De entero a string
/* let dato = 15;            // El dato se declara como entero
console.log(typeof(dato));   //typeof es una función la cual muetra que tipo de dato está contenida en 

dato = String(dato);         // Aquí guardamos en dato la conversión del entero a string con la función String
//dato = dato.toString();
console.log(typeof(dato));

//String a entero
let dato2 = '45';
console.log(typeof(dato2));

dato2 = parseInt(dato2);
console.log(typeof(dato2));


//String a decimal
let dato3 = '4.5';
console.log(typeof(dato3));

dato3 = parseFloat(dato3);
console.log(typeof(dato3)); */
