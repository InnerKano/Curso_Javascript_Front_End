import { BD_ejercicio_cajero } from "./BD_Ejercicio5.js";

// mini_menu_ejercicio_5.js

export function mini_menu_ejercicio_5() {
    const usuarios = BD_ejercicio_cajero();
    let usuariobool = false;
    let contraseñabool = false;
    let posicionusuario;
    let usuariotemp;

    // Busca la posición de usuariologin en el array de objetos
    
    do {
        let usuariologin = prompt("BANCO\n[-1 para volver]\n[-2 para ver los usuarios]\nIngrese el usuario: ");
        let contraseñalogin;
        if (usuariologin == '-1')
            return;
        if (usuariologin == '-2')
            alert('USUARIOS DE EJEMPLO: '+ JSON.stringify(usuarios, null, 2));
        posicionusuario = usuarios.findIndex(usuario => usuario.nombre === usuariologin); // índice de un elemento
        if (posicionusuario !== -1) {
            
            usuariotemp = usuarios[posicionusuario];
            contraseñalogin = prompt(`Usuario: ${usuariologin}\n    Ingrese su contraseña: `);
            if(usuariotemp.contraseña === contraseñalogin){
                usuariobool = true;
                contraseñabool = true;
                break;
            }
            else
                alert("Contraseña invalida.")
        } 
        else {
            alert("Usuario no encontrado.");
        }
    } while (posicionusuario === -1 || (!usuariobool && !contraseñabool));

    // Declarar usuariotemp fuera del bucle
  

    function depositarfun() {
        let saldocache = 0;
        saldocache = prompt("Depositar Menu\nIngrese un valor a depositar: ");
        saldocache = parseFloat(saldocache);
        usuariotemp.saldo += saldocache;
        alert("Saldo Depositado: " + saldocache);
        alert("Saldo Total: " + usuariotemp.saldo);
    }

    function retirarfun() {
        let saldocache = 0;
        alert();
        let retirarbool = false;
        do {
            saldocache = prompt("'Retirar Menu'\nIngrese un valor a retirar: ");
            saldocache = parseFloat(saldocache);
            if (saldocache > usuariotemp.saldo) {
                alert('No tiene suficiente dinero para realizar esta operación, vuelva a intentarlo con otro monto menor');
            } else {
                usuariotemp.saldo -= saldocache;
                alert("Valor Retirado: " + saldocache);
                alert("Nuevo Saldo: " + usuariotemp.saldo);
                retirarbool = true;
            }
        } while (retirarbool == false);
    }

    // Elimina el corchete adicional al final de la función
    // }

    if (usuariobool && contraseñabool) {
        let transaccion;
        let transaccionmenutext = "BANCO\n 1. Depositar\n 2. Retirar\n 3. Consultar\n 4. Salir\n Ingrese una opcion: ";
        while (transaccion !== '4') {
            //inicializar variables
            transaccion = prompt(`${transaccionmenutext}`);

            switch (transaccion) {
                case '1':
                    depositarfun();
                    break;
                case '2':
                    retirarfun();
                    break;
                case '3':
                    alert('Consultar Menu');
                    alert("Saldo: " + usuariotemp.saldo);
                    break;
                case '4':
                    alert('Saliendo del programa');
                    usuariotemp = '0';
                    break;
                default:
                    alert('Opcion invalida');
            }
        }
    } else {
        alert('Usuario no existe: ' + usuariologin);
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