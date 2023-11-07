/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/
const frase = prompt("Ingrese un texto:");
let textoInvertido = "";

if (frase === null || frase === undefined || !isNaN(frase)) {
  alert("Texto inválido, ingrese un texto");
} else {
  for (let i = frase.length - 1; i >= 0; i--) {
    textoInvertido += frase[i];
  }
  document.write("El texto ingresado al revés: " + textoInvertido);
}