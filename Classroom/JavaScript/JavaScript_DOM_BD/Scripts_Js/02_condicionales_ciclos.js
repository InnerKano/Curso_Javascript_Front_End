
/* SENTENCIA IF... ELSE */

// var nombre = 'Luis';
// var edad = 17;
// /* 
// edad < 12, "es un niño."
// edad > 11, es < 18, "es un adolescente".
// edad > 17, es < 60, "es un adulto."
// edad > 60, "es un anciano." */

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

//var acceso = false;

//acceso == true ? console.log('Usuario permitido') : console.log('Usuario denegado');

//let edad = 23
//let esMayor = (edad > 18) ? "Mayor de edad" : "Menor de edad";
//console.log(esMayor);


/* SENTENCIA SWITCH */

/*
var mes = 1;

switch(mes){
     case 1:
         console.log('Enero');
         break;
     case 2:
        console.log('Febrero');
        break;
     case 3:
        console.log('Marzo');
        break;
     case 4:
        console.log('Abril');
        break;
     default:
         console.log('Mes no encontado.');
}
*/ 

/* CAJERO */
/*
var saldo = 200000;
var valor = 15000;
var opcion = 1;

switch(opcion){
    case 1: //Depósito
        console.log('Saldo Inicial:' + saldo);
        console.log('Depósito:' + valor);
        console.log('Saldo Final:' + (saldo += valor));
        break;

    case 2: //Retiro
    console.log('Saldo Inicial:' + saldo);
    console.log('Retiro:' + valor);
    console.log('Saldo Final:' + (saldo -= valor));
       break;

    case 3:  //Consulta
    console.log('Saldo:' + saldo);
       break;

    default:
        console.log('Opción no válida');
}
*/


/* SENTENCIA FOR y FOREACH */

/*
for(let i=2; i < 25; i+=5){   // El break rompe el for
    console.log(i);
}


var nombres = ['Juan', 'Carlos', 'Ana', 'Luisa'];

for(i=0; i <= 3; i++){   
    console.log(nombres[i]);
}
*/
/*
var nombres = ['Juan', 'Carlos', 'Ana', 'Luisa'];
nombres.forEach((element, i) => console.log(element));   // foreach es para arrays. element: array; i: índice
*/
/*
var lista = [3,20,15,17,35];
var suma = 0;

for(var i=0; i <= 4; i++){
    suma+= lista[i];
    //console.log(suma);
}
console.log(suma);
*/


/* SENTANCIA WHILE */

/*
var i = 50;
while(i >= 1){
    console.log(i);
    i--;
}
console.log(i); 
*/

//var band = 0;  //0-1
//var lista = [0,3,5,8,7,3,2,9,2];
//var i = 0;

/*
while(band == 0){
    if(lista[i]!=2){
        band=0;
    }else{
        band=1;
    }
    console.log(lista[i]);
    i++;
}
 
*/


/* SENTENCIA DO... WHILE */

/*
 var i = 0;

 do{
    console.log(i);
    i++;
 }while(i <= 10);

 console.log('por fuera: '+i);
*/

/*
do{
    if(lista[i]!=2){
        band=0;
    }else{
        band=1;
    }
    console.log(lista[i]);
    i++;
}while(band == 0);



