let numeros = [1, 2, 3, 4, 5, 6]

let [primero, segundo, ...resto] = numeros;

console.log("Primer número:", primero);
console.log("Segundo número:", segundo);
console.log("Resto de los números:", resto);