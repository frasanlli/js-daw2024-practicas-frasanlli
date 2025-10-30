const min = 1
const max = 49
const claves = 6
const limit = 50
let combinaciones = []
let combinacion = []
let new_value = 0

for (let x = 0; x < limit; x++) {
    combinacion = []
    for (let x = 0; x < claves; x++) {
        new_value = Math.floor(Math.random() * 49) + 1;
        if (combinacion.includes(new_value)){
            //console.log(new_value)
            //console.log(combinacion)
            x--
        }else{
            combinacion.push(new_value)
        }
    }
    //console.log(combinacion)
    combinaciones.push(combinacion)
}
for (let x = 0; x < combinaciones.length; x++) {
    console.log(combinaciones[x])
}