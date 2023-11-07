/* Realiza un script que cuente el número de vocales que tiene un texto.*/
const frase= prompt("Ingrese un texto: ");
const vocales="aeiouAEIOU";
const vocalesFrase=[];
if (frase === null || frase === undefined || !isNaN(frase)) {
    alert("texto invalido, ingrese un texto");
  } else {
    for(let i=0;i<=frase.length;i++){
        const caracter= frase[i];
        if (vocales.includes(caracter)) {
            vocalesFrase.push(caracter);
          }
    }
    document.write("Las vocales del texto ingresado son: " + vocalesFrase.join(","));
  }
  