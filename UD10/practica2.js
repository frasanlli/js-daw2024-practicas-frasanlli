let respuesta = document.getElementById("tempo")
temporizador(2000)
.then((res) => {
  respuesta.textContent = res; // "Tiempo concluido"
})
.catch((err) => {
  respuesta.textContent = err; // "El tiempo no va bien"
});

function temporizador(ms) {
  return new Promise((resolve, reject) => {
    // Temporizador principal
    const buenTiempo = setTimeout(() => {
      resolve("Tiempo concluido");
      clearTimeout(timeoutFail);
    }, ms);

    // Temporizador de fallo (2 * ms)
    const malTiempo = setTimeout(() => {
      reject("El tiempo no va bien");
      clearTimeout(timer);
    }, 2 * ms);
  });
}

