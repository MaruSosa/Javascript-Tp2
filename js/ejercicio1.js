/*1- Escribir un programa que solicite la edad y si es mayor de 18 años
 mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */
 const edad = prompt('Por favor, ingrese su edad:');
 if (isNaN(edad)) {
   alert('La edad ingresada no es un número válido');
 } else {
   if (parseInt(edad) >=18) {
     document.write('¡Ya puede conducir!');
   } else {
     document.write('Aún no tiene la edad suficiente para conducir');
   }
 }