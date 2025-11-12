let nacimientoInput = window.prompt("¿Qué día naciste? YYYY/MM/DD")

if (formatoValido(nacimientoInput)){
    let nacimiento = fechaValida(nacimientoInput)

    if (nacimiento){
        window.alert(`Han transcurrido ${calcularDiasTranscurridos(nacimiento)} días aproximadamente, desde que naciste`)
    }else{
        window.alert(`ERROR: Fecha inexistente`)
    }

}else{
    window.alert(`ERROR: Formato de fecha no válido`)

}



function calcularDiasTranscurridos(nacimiento){
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

function formatoValido(nacimientoInput) {
  const regex = /^\d{4}\/\d{2}\/\d{2}$/

  if (!regex.test(nacimientoInput)) {
    return false;
  }else{
    return true
  }
}

function fechaValida(nacimientoInput) {
  let fecha = new Date(nacimientoInput);
  if (isNaN(fecha)){
    return false
  }else{
    return fecha
  }
}
