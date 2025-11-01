function popupBucle(){
    let texto = []
    let palabra = prompt("Introduce una palabra:")
    while (palabra != null && palabra != "") {
        texto.push(palabra)
        palabra = prompt("Introduce una palabra:")
    }
    return texto
}

function p1(){
    let texto = popupBucle()
    texto = new Set(texto)
    texto = Array.from(texto);
    texto.sort()
    document.getElementById("resultado").innerHTML = texto;
}

function p2(){
    let texto = popupBucle()
    let frecuencias = new Map()

    for (let x = 0; x < texto.length; x++) {
        let repe = 0
        let palabra = texto[x]
        for (let x = 0; x < texto.length; x++) {
            if (palabra == texto[x]){
                repe++
            }
        }
        frecuencias.set(palabra, repe)
    }
    const tabla = document.getElementById("resultado2");
    const filaEncabezado = tabla.insertRow();
    const thClave = document.createElement("th");
    thClave.textContent = "Clave";
    const thValor = document.createElement("th");
    thValor.textContent = "Valor";
    filaEncabezado.appendChild(thClave);
    filaEncabezado.appendChild(thValor);

    frecuencias.forEach(function(valor, clave) {
        const fila = tabla.insertRow();

        const celdaClave = fila.insertCell();
        const celdaValor = fila.insertCell();

        celdaClave.textContent = clave;
        celdaValor.textContent = valor;
      })


}

function filtro(matriz, doble){
    document.getElementById("resultado3_1").innerHTML = doble(matriz)
}

function doble(matriz){
    for (let x = 0; x < matriz.length; x++) {
        matriz[x] = matriz[x]*2
    }
    return matriz
}

function filtroMayus(matriz, mayus){
    document.getElementById("resultado3_2").innerHTML = mayus(matriz)
}

function mayus(matriz){
    for (let x = 0; x < matriz.length; x++) {
        matriz[x] = matriz[x].toUpperCase()
    }
    return matriz
}

function filtroFactorial(matriz, factorial){
    document.getElementById("resultado3_3").innerHTML = factorial(matriz)
}

function factorial(matriz){
    for (let x = 0; x < matriz.length; x++) {
        let res = 1;
        while (matriz[x] > 1) {
            res *= matriz[x];
            matriz[x]--;
        }
        matriz[x] = res
    }
    return matriz
}

function p3(){
    let matriz = [1,2,3,4]
    let matrizMinus = ["a","b","c","d"]
    filtro (matriz, doble);
    filtroMayus (matrizMinus, mayus);
    filtroFactorial (matriz, factorial);
}