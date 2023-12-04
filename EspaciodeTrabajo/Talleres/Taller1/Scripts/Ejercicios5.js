import {BD_ejercicio_cajero} from "./BD_Ejercicio5.js";
// mini_menu_ejercicio_5.js

export function mini_menu_ejercicio_5() {
    const usuarios = BD_ejercicio_cajero();
    let usuariobool = false;
    let contraseñabool = false;
    let posicionusuario;
    
    // Busca la posición de usuariologin en el array de objetos

    do{
        let usuariologin = prompt("BANCO\nIngrese el usuario: ");
        posicionusuario = usuarios.findIndex(usuario => usuario.nombre === usuariologin);     // índice de un elemento
        if (posicionusuario !== -1) {
            usuariobool = true;
            break;
        } else {
            console.log("Usuario no encontrado.");
        }
    }
    while(posicionusuario === -1)
/*     for(let i = 0; i <= usuarios.length - 1; i++){//ya existe una funcion
        if (usuariologin === usuarios[i].nombre){
            console.log('Usuario encontrado');
            usuariobool = true;
            posicionusuario = i;
            break;
        }
    } */


    if(usuariobool){
        var transaccion;
        while(transaccion !== '4'){
            //inicializar variables
            var saldocache = 0;
            var usuariotemp = usuarios[posicionusuario];
            transaccion = prompt("BANCO\n 1. Depositar\n 2. Retirar\n 3. Consultar\n 4. Salir\n Ingrese una opcion:");
            
            switch(transaccion){
                case '1':
                    console.log('Depositar Menu');
                    saldocache = prompt("Ingrese un valor a depositar: ");
                    saldocache = parseFloat(saldocache);
                    usuariotemp.saldo += saldocache;
                    console.log("Saldo Depositado: ", saldocache);
                    console.log("Saldo Total: ", usuariotemp.saldo);
                    break;
                case '2':
                   console.log('Retirar Menu');
                   saldocache = prompt("Ingrese un valor a retirar: ");
                   saldocache = parseFloat(saldocache);
                   usuariotemp.saldo -= saldocache;
                   console.log("Saldo: ", usuariotemp.saldo);
                   break;
                case '3':
                   console.log('Consultar Menu');
                   console.log("Saldo: ", usuariotemp.saldo);
                   break;
                case '4':
                    console.log('Saliendo del programa');
                    break;
                default:
                    console.log('Opcion invalida');
            }
        }
    } else {
        console.log('Usuario no existe: ', usuariologin);
    }
}
/* 5. Desarrollar el programa del cajero electrónico con los siguientes criterios:
a. Deberá tener un saldo predefinido.
b. Al iniciar, se le debe indicar al usuario que está ingresando al cajero y se le
mostrarán las operaciones que puede realizar.
c. Deberá leer la opción de la operación que el usuario desea realizar: Depositar,
Retirar, Consultar y Salir del cajero.
d. Se debe crear una función para cada operación que puede hacer el usuario.
e. El valor por depositar o retirar debe ser ingresado por el usuario mediante el
teclado.
f. El saldo debe cambiar de acuerdo con los depósitos o retiros realizados.
g. Se debe validar que el valor a retirar no sea mayor que el saldo. Si lo es, se debe
mostrar un aviso al usuario que le informe que no es posible hacer el retiro por
fondos insuficientes.
h. Al finalizar cada operación, se debe preguntar al usuario si desea realizar otra
operación o desea salir. Si quiere hacer otra, el sistema deberá mostrarle de
nuevo las operaciones y repetir el proceso, manteniendo el saldo actual.
i. Si el usuario desea salir, se le presenta un mensaje que le informa que va a salir
de la aplicación. */