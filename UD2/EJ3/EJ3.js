function escribir() {
    let fila = document.getElementById("fila")
    let palabra = document.getElementById("input").value
    borrar(fila)

    for (i = 0; i < palabra.length; i++){
        let celda = document.createElement("td");
        celda.textContent = palabra[i];
        fila.appendChild(celda);
    }
}

function borrar(fila) {
    while (fila.firstChild) {
        fila.removeChild(fila.firstChild);
    }
}
