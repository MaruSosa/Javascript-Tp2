/* Realiza un script que pida un texto y lo muestre en mayúsculas.*/
const texto = prompt("Ingrese un texto: ");
if (texto === null || texto === undefined || !isNaN(texto)) {
  alert("texto invalido, ingrese un texto");
} else {
  const resultado = texto.toUpperCase();
  document.write("El texto ingresado en mayúsculas: " + resultado);
}
