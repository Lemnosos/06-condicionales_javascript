//positivo, negativo o 0
function determinarSigno(num) {
    if (num > 0) {
        return "positivo";
    } else if (num < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}
console.log("El número 5 es " + determinarSigno(5));
console.log("El número -3 es " + determinarSigno(-3));
console.log("El número 0 es " + determinarSigno(0));


//comprobar mayoria de edad
function puedeVotar(edad) {
    return (edad >= 18) ? "puede votar" : ("no pude votar");
}
for (let i = 15; i < 25; i++)
    console.log(`Con ${i} años: ${puedeVotar(i)}`)

//mayor de 2 numeros
function mayorDeDos(n1, n2) {
    return Math.max(n1, n2);
}
console.log("El mayor de 5 y 10 es " + mayorDeDos(5, 10));
console.log("El mayor de 20 y 15 es " + mayorDeDos(20, 15));
console.log("El mayor de 77 y 77 es " + mayorDeDos(77, 77));


//calcular multiplos de 5
function esDivisiblePorCinco(n) {
    return (n % 5 == 0)
}
console.log("¿10 es multiplo de 5? " + (esDivisiblePorCinco(5) ? "Sí" : "No"));
console.log("¿10 es multiplo de 5? " + (esDivisiblePorCinco(-5) ? "Sí" : "No"));
console.log("¿10 es multiplo de 5? " + (esDivisiblePorCinco(0) ? "Sí" : "No"));
console.log("¿10 es multiplo de 5? " + (esDivisiblePorCinco(23) ? "Sí" : "No"));


//asignar una nota en funcion del puntaje
function clasificarNota(num) {
    function clasificarNota(num) {
        if (num >= 90) return "Excelente";
        if (num >= 70) return "Buena";
        if (num >= 50) return "Regular";
        return "Insuficiente";
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`${10 * i} tiene una nota de ${clasificarNota(10 * i)}`);
}