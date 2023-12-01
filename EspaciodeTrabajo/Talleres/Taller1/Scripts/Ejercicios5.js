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
