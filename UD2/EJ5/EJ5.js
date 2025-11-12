function crearArray(){
    let inputs = document.getElementsByTagName('input')
    let inputsValores = []
    const nCeldas = 9
    for (i = 0; i < inputs.length; i++){
        if (Number(inputs[i].value) || inputs[i].value == "0"){
            inputsValores.push(Number(inputs[i].value))
        }
    }
    if (inputsValores.length!=nCeldas){
        window.alert(`ERROR: Rellene TODOS los campos con un valor numérico`)
        //console.log(inputsValores)
    }else{
        compararArray(inputsValores)
    }
}
function compararArray(inputsValores){
    let numeroMayor = inputsValores[0]
    //console.log(inputsValores)
    for (let i = 1; i < inputsValores.length; i++) {
        if (inputsValores[i] > numeroMayor) {
            //console.log(inputsValores[i])
            numeroMayor = inputsValores[i]
        }
    }
    window.alert(`El mayor número es el ${numeroMayor}`)

}
