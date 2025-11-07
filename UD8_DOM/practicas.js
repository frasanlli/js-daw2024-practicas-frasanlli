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


function p2() {
  let email = document.getElementById("email")
  let password = document.getElementById("password")

}


function p3(opcion) {
  let marca = null;
  let modelo = null;
}
