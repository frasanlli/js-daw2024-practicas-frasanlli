let paises = ["España", "Francia", "Alemania", "Italia"];

for (let x = 0; x < paises.length; x++) {
  console.log(paises[x])
}

paises.shift()

for (let x = 0; x < paises.length; x++) {
  console.log(paises[x])
}