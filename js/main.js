/*
function mayorDeDos(n1, n2) {
    if (n1 == n2) {
        return "Son iguales";
    } else if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
mayorDeDos(5, 10);
mayorDeDos(20, 15);
mayorDeDos(7, 7);


function esDivisiblePorCinco(n) {
    return (n % 5 == 0)
}
console.log("¿10 es multiplo de 5?" + (esDivisiblePorCinco(5) ? "Sí" : "No"));
console.log("¿10 es multiplo de 5?" + (esDivisiblePorCinco(-5) ? "Sí" : "No"));
console.log("¿10 es multiplo de 5?" + (esDivisiblePorCinco(0) ? "Sí" : "No"));
console.log("¿10 es multiplo de 5?" + (esDivisiblePorCinco(23) ? "Sí" : "No"));
*/

function clasificarNota(num) {
    if (num >= 90) {
        return "Excelente"
    } else if (num >= 70) {
        return "Buena"
    } else if (num >= 50) {
        return "Regular"
    } else
        return "Insuficiente"
}

for (let i = 0; i <= 10; i++) {
    console.log(`${10 * i} tiene una nota de ${clasificarNota(10 * i)}`);
}