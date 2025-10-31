//2.1
console.log ("EJER 2.1");

let matrizNum = [4, 8, 6, 2, 1]
let total = 0

console.log(iterar (matrizNum, total))
console.log(recursiva (matrizNum.length, matrizNum, total))

console.log("En este caso es más rápido y sencillo iterar")

function iterar (matrizNum, total){
    for (let x = 0; x < matrizNum.length; x++) {
        total += matrizNum[x]
    }
    return total
}

function recursiva (longitudMatriz, matrizNum, total){
    if (longitudMatriz > 0){
        longitudMatriz-=1
        total += matrizNum[longitudMatriz]
        return recursiva(longitudMatriz, matrizNum, total)
    }else{
        return total
    }

}

//2.2
console.log ("EJER 2.2");
const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];

productos.forEach(incrementar)
for (let x = 0; x < productos.length; x++) {
    console.log(productos[x])
}

function incrementar(producto) {
    const incremento = 1.1
    producto.precio = producto.precio*incremento
}

//2.3---------------------
console.log ("EJER 2.3");
const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Laura", edad: 16 }
];

let mayores = personas.filter(checkAdult);
printJson(mayores)

mayores = mayores.map(function (mayor) {
  return {
    nombre: mayor.nombre,
    edad: mayor.edad * 2,
  };
});
printJson(mayores);

let fin = mayores.reduce(function (acumulador, persona) {
  return acumulador + persona.edad;
}, 0)
console.log(fin)

function checkAdult(persona) {
  return persona.edad >= 18;
}

function printJson(json){
    for (let x = 0; x < json.length; x++) {
        console.log(json[x])
    }
}