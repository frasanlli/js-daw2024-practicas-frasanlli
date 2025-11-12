let respuesta = document.getElementById("tempo")
temporizador(2000)
.then((res) => {
  respuesta.textContent = res;
})
.catch((err) => {
  respuesta.textContent = err;
});

function temporizador(ms) {
  return new Promise((resolve, reject) => {
    // Temporizador principal
    const buenTiempo = setTimeout(() => {
      resolve("Tiempo concluido");
      clearTimeout(malTiempo);
    }, ms);

    // Temporizador de fallo (2 * ms)
    const malTiempo = setTimeout(() => {
      reject("El tiempo no va bien");
      clearTimeout(buenTiempo);
    }, 2 * ms);
  });
}

