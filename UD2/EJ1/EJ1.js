function convertirCadena(){
    let miInput = document.getElementById("miInput").value
    let inversa = ""
    for (i = miInput.length-1; i > -1; i--){
        inversa += miInput[i]
    }

    document.getElementById("inversa").value = inversa
    document.getElementById("mayus").value = miInput.toUpperCase()
    document.getElementById("repetida").value = miInput+miInput+miInput
    document.getElementById("inversaMayus").value = inversa.toUpperCase()
}
