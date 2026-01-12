/*
Al hacer clic con el botón derecho del ratón en el video, debe aparecer un texto en la parte
inferior que nos diga el tiempo total del vídeo en minutos y segundos.
Ver video con toda la práctica funcionando (adjunto).
*/

window.addEventListener("load", () => {
  let video1 = document.getElementById("video1");
});

video1.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  mostrarDuracion(video1.duration);
});

function mostrarDuracion(segundosVideo) {
  let etiquetaDuracion = document.getElementById("duracion");
  let segundos = Math.floor(segundosVideo);
  let minutos = Math.floor(segundos/60);

  etiquetaDuracion.textContent = `Duración: ${minutos}:${segundos}`;
}
