function formatoValido() {
  let input = document.getElementsByTagName('input')[0].value
  const regex = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/

  if (!regex.test(input)) {
    window.alert(`El format de data no és correcte`)
  }else{
    window.alert(fechaValida(input))
  }
}

function fechaValida(input){
  const [dia, mes, anio] = input.split("/").map(Number);
  const mesMax = 12
  const mesMin = 1
  const diaMax = 31
  const diaMin = mesMin
  const anioMax = 9999
  const anioMin = 10
  let respuesta = ""

  if (mes > mesMax) {
    respuesta += "ERROR: El mes és superior a 12\n"
  }
  if(mes < mesMin){
    respuesta += "ERROR: El mes és inferior a 1\n"
  }
  if(dia < diaMin){
    respuesta += "ERROR: El dia és inferior a 1\n"
  }
  if(dia > diaMax){
    respuesta += "ERROR: El dia és superior a 31\n"
  }
  if(anio < anioMin){
    respuesta += "ERROR: El año és inferior a 10\n"
  }
  if(anio > anioMax){
    respuesta += "ERROR: El año és superior a 9999\n"
  }
  if (respuesta == ""){
    respuesta = "Gràcies per introduir la data"
  }

  return respuesta
}

