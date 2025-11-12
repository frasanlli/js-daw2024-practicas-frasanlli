function escribir() {
    let titulos = ["BINARI", "OCTAL", "HEXADECIMAL"]
    let filaBin = document.getElementById("filaBin")
    let filaOct = document.getElementById("filaOct")
    let filaHex = document.getElementById("filaHex")
    let filas =[filaBin, filaOct, filaHex]
    let input = document.getElementById("input").value
    let numero = 0
    let output = ""

    for (i = 0; i < filas.length; i++){
        borrar(filas[i])
    }

    if (checkNumero(input)){
        numero = Number(input)
        for (i = 0; i < titulos.length; i++){
            let celdaTitulo = document.createElement("td");
            let celdaValor = document.createElement("td");

            celdaTitulo.textContent = titulos[i];
            filas[i].appendChild(celdaTitulo);
            if (titulos[i] == "BINARI"){
                output = numero.toString(2);   // Binario → "11111111"
            }else if (titulos[i] == "OCTAL"){
                output = numero.toString(8);   // Octal   → "377"
            }else if (titulos[i] == "HEXADECIMAL"){
                output = numero.toString(16);  // Hex     → "ff"
            }
            celdaValor.textContent = output;
            filas[i].appendChild(celdaValor);
        }
    }
}

function borrar(fila) {
    while (fila.firstChild) {
        fila.removeChild(fila.firstChild);
    }
}

function checkNumero(input) {
    if (Number(input) || input == "0"){
        return true
    }else{
        window.alert(`ERROR: Rellene el input con un valor numérico`)
        return false
    }
}
