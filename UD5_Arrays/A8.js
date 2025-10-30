const limit = 10000
const min = 1
const max = 10
let frecuencias = new Map()
let valorNum = 0
let contadorActual = 0

for (let i = 1; i <= 10; i++) {
  frecuencias.set(i, 0);
}
//console.log(frecuencias)

for (let x = 0; x < limit; x++) {
    valorNum = Math.floor(Math.random() * max) + min
    //console.log ("valorNum "+ valorNum)
    contadorActual = frecuencias.get(valorNum)+1
    //console.log ("contadorActual "+ contadorActual)
    frecuencias.set(valorNum, contadorActual);
}

console.log("Frecuencias")
for (let [clave, valor] of frecuencias) {
    console.log(`Número ${clave} se repite ${valor}`)
}