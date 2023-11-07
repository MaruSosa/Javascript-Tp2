/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

const nombres = [];
const edades = [];
for (let i = 0; i < 3; i++) {
  const nombre = prompt("Ingrese el nombre de la persona " + (i + 1) + " :");
  if (nombre === null) {
    alert("Has cancelado la entrada. El programa se cerrará.");
    break;
  }
  const edad = parseInt(prompt("Ingrese la edad de " + nombre + " :"));
  if (isNaN(edad)) {
    alert("Entrada de edad no válida. El programa se cerrará.");
    break;
  }
  nombres.push(nombre);
  edades.push(edad);
}
if (!cancelado && nombres.length > 0) {
    const mayor = Math.max(...edades);
    const indiceMayor = edades.indexOf(mayor);
    const nombreMayor = nombres[indiceMayor];
    document.write("El nombre de la persona mayor de todos es: " + nombreMayor);
  }
