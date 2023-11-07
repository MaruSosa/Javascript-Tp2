/*Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:Input: Hola mundo     Output: la vocal ‘o’ está en la posición 1*/

const texto = prompt("Ingresar un texto");
const vocales = "aeiouAEIOU";
let primeraVocalEncontrada = false;

if (texto === null || texto === undefined || !isNaN(texto)) {
  alert("Texto inválido, ingrese un texto");
} else {
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    if (vocales.includes(caracter)) {
      document.write("La posición de la primera vocal '" + caracter + "' en el texto es: " + i);
      primeraVocalEncontrada = true;
      break;
    }
  }

  if (!primeraVocalEncontrada) {
    document.write("No se encontraron vocales en el texto.");
  }
}
