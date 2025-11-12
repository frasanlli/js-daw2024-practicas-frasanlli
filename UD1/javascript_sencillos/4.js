let color = window.prompt("¿Qué color prefieres? R para rojo, V para verde o A para azul:");

if (color === 'R') {
    document.body.style.backgroundColor = "red"; // Rojo
} else if (color === 'V') {
    document.body.style.backgroundColor = "#00FF00"; // Verde
} else if (color === 'A') {
    document.body.style.backgroundColor = "#0000FF"; // Azul
} else {
    window.alert("Color no válido.");
}
