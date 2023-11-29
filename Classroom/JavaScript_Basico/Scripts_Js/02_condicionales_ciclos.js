
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


var usuarios = [
    { nombre: 'Juan', contraseña: '0', saldo: 100 },
    { nombre: 'Carlos', contraseña: '1', saldo: 50 },
    { nombre: 'Ana', contraseña: '2', saldo: 20 },
    { nombre: 'Luisa', contraseña: '3', saldo: 10 }
  ];
//console.log(usuarios[0].nombre);
var usuariobool = false;
var posicionusuario;
var usuariologin = prompt("BANCO\nIngrese el usuario: ");
//var contraseñausuario = prompt("\nIngrese la contraseña: ");
for(var i=0;i<=usuarios.length-1;i++){
    // console.log(typeof('1',usuarios[i].nombre));
    // console.log(typeof('2',usuariologin));
    if (usuariologin==(usuarios[i].nombre)){
        console.log('a');
        usuariobool = true;
        posicionusuario = i;
        break
    }
}
if( usuariobool == true){
    while(transaccion != 4){
        var saldo = usuarios[i];
        var transaccion = prompt("BANCO\n 1. Depositar\n 2. Retirar\n 3. Consultar\n 4. Salir\n Ingrese una opcion:");
        switch(transaccion){
            case '1':
                console.log('Depositar Menu');
                saldocache = prompt("Ingrese un valor a depositar: ");
                saldocache = parseFloat(saldocache);
                saldo = saldo + saldocache;
                console.log("saldo: ", saldo)
                saldocache = 0;
                break;
            case '2':
               console.log('Retirar Menu');
               saldocache = prompt("Ingrese un valor a retirar: ");
               saldocache = parseFloat(saldocache);
               saldo = saldo - saldocache;
               console.log("saldo: ", saldo)
               saldocache = 0;
               break;
            case '3':
               console.log('Consultar Menu');
               console.log("saldo: ", saldo)
               break;
            //caso '4' salir
            default:
                console.log('Opcion invalida');
        }
    }
}
else{
    console.log('Usuario no existe: ',usuario);
}




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



