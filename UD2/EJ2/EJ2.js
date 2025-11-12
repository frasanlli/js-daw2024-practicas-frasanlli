async function escribir() {
    let cells = document.getElementsByTagName("td")
    let palabra = "HOLA"
    let contador = 0;
    while (contador < 5) {
        for (i = 0; i < palabra.length; i++){
            cells[i].textContent = palabra[i]
            await sleep(1000);
        }

        for (i = 0; i < palabra.length; i++){
            cells[i].textContent = ""
        }
        await sleep(2500);
    }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

escribir()
