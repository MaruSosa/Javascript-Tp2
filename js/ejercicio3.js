/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */
let cadenas = [];

while (true) {
  const cadena = prompt("Ingresa una cadena de texto:");
  if (cadena === null) {
    const confirmar = confirm(
      "¿Estás seguro de que deseas finalizar y mostrar las cadenas concatenadas?"
    );

    if (confirmar) {
      break;
    }
  } else {
    cadenas.push(cadena);
  }
}
if (cadenas.length > 0) {
  const resultado = cadenas.join("-");
  document.write("Cadenas concatenadas: " + resultado);
} else {
  document.write("No se ingresaron cadenas.");
}
