/* Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/
const frase= prompt("Ingrese un texto:");
if (frase === null || frase === undefined || !isNaN(frase)) {
    alert("texto invalido, ingrese un texto");
  } else {
    const resultado= frase.split('').join('-');
    document.write("la frase resultante es: "+resultado);
  }
