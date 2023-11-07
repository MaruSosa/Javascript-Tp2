/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
let suma=0;
while (true) {
    const entrada= prompt('ingrese un número o presione cancelar');
    if(entrada==null){
        break;
    }
    const numero=parseFloat(entrada);
    if(!isNaN(numero)){
        suma=suma+numero;
    }else{
        alert('el valor ingresado es inválido');
    }
}

if (suma!=0) {
    document.write('la suma total es: '+ suma);
}else{
    document.write('No se ingresaron numeros.');
}
