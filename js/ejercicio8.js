/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456*/
const niveles = prompt('Ingrese un número menor a 50: ');

if (!isNaN(niveles) && niveles <= 50) {
    for (let i = 1; i <= niveles; i++) {
        let linea = '';
      
        for (let j = 1; j <= i; j++) {
          linea += i; 
          
        }
        document.write(linea+'<br>');
    }
} else {
  alert('Valor ingresado inválido');
}