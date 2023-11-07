/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido*/

const nota = prompt("Por favor, ingresa una nota (número del 0 al 10):");
const notaNumero = parseFloat(nota);

if (!isNaN(notaNumero) && notaNumero >= 0 && notaNumero <= 10) {
    switch (true) {
        case (notaNumero >= 0 && notaNumero <= 2):
            alert("Muy deficiente");
            break;
        case (notaNumero >= 3 && notaNumero <= 4):
            alert("Insuficiente");
            break;
        case (notaNumero >= 5 && notaNumero <= 6):
            alert("Suficiente");
            break;
        case (notaNumero === 7):
            alert("Bien");
            break;
        case (notaNumero >= 8 && notaNumero <= 9):
            alert("Notable");
            break;
        case (notaNumero === 10):
            alert("Sobresaliente");
            break;
    }
} else {
    alert("Número erróneo");
}