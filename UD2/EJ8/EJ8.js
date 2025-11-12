function calcularAnios(){
  let nacimientoInput = document.getElementsByTagName('input')[0].value
  let nacimiento = new Date(nacimientoInput);
  let diasPass = calcularDias(nacimiento)
  let aniosPass = Math.floor(diasPass/365)

  window.alert(`Han transcurrido ${aniosPass} años aproximadamente, desde que naciste`)
}

function calcularDias(nacimiento){
    let fechaActual = new Date()
    let segundosPass = 0
    let horasPass = 0
    let diasPass = 0
    //calcular segundos
    segundosPass = (Date.parse(fechaActual) - Date.parse(nacimiento))/1000
    //calcular horas
    horasPass = segundosPass/3600
    diasPass = Math.round(horasPass/24)
    return diasPass
}

