let fechaActual = new Date()
let diaSemanaNum = fechaActual.getDay()
let diaMesNum = fechaActual.getDate()
let mesNum = fechaActual.getMonth()
let anioNum = fechaActual.getFullYear()
let diaString = getDiaSemana(diaSemanaNum)
let mesString = getMes(mesNum)

window.alert(`Hoy es ${diaString},${diaMesNum} de ${mesString} de ${anioNum}`)

function getDiaSemana(diaSemanaNum){
    const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
    return diasSemana[diaSemanaNum-1]
}
function getMes(mesNum){
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return meses[mesNum-1]
}