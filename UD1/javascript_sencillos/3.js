let cadenaTexto = window.prompt("Introduce una cadena de texto:");
let contadorA = 0;

for (let i = 0; i < cadenaTexto.length; i++) {
    if (cadenaTexto[i].toLowerCase() === 'a') {
        contadorA++;
    }
}

window.alert("La cantidad de letras 'a' (mayúsculas y minúsculas) es: " + contadorA);
