document.onkeydown = function(event) {
  if (event.altKey && event.key === "F12") {
    p1();
  }
};

function p1() {
  let fondo = document.getElementById("imagen")
  fondo.style.backgroundImage = "url(https://picsum.photos/id/237/200/300)"
  fondo.style.backgroundSize = "cover"
}