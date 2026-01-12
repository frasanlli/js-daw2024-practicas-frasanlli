window.addEventListener("load", () => {
  cuentaAtras(5, 1000);
});
/* Crear una página web que al cabo de 5 segundos de estar en ella muestre una notificación
al usuario para que visite un nuevo video que se ha publicado. Para ello, crea una función
timeout que reciba el número de ms como parámetro y cree una promesa con el timeout
como acción. Además, que salga por pantalla una cuenta atrás de 5 a 0 segundos. Cuando
la cuenta llegue a cero, se mostrará la notificación.
Cuando el usuario clica en la notificación, llevarle a una página en el que se muestre el
video que se adjunta en esta tarea.
Al hacer clic con el botón izquierdo del ratón en el video, éste se parará o se reproducirá.
Cada clic cambia de un estado a otro.

Al hacer clic con el botón derecho del ratón en el video, debe aparecer un texto en la parte
inferior que nos diga el tiempo total del vídeo en minutos y segundos.
Ver video con toda la práctica funcionando (adjunto). */

function cuentaAtras(segundos, ms) {
  console.log("cuentaAtras "+ segundos + "ms "+ms);
  let etiquetaTiempo = document.getElementById("tiempo");
  etiquetaTiempo.textContent = segundos;
  return new Promise((resolve, reject) => {
    if (segundos != 0) {
      setTimeout(() => {
        resolve(cuentaAtras(segundos-1, ms));
      }, ms);
    } else {
      resolve(notificar());
    }
  });
}

function notificar() {
  console.log("notificar");
  Notification.requestPermission().then((resp) => {
    if (resp == "granted") {
      let n = new Notification("Pulsa para abrir el vídeo");
      n.addEventListener('click', () => {
        window.open("video.html")
      })
    } else {
      console.log("Permiso denegado");
    }
  });

}
