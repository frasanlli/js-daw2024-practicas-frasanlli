const capa1 = document.getElementById("capa1");
const capa2 = document.getElementById("capa2");

capa1.addEventListener("dragstart", (event) => {
  capa1.style.opacity = "50%"
});

capa1.addEventListener("dragend", (event) => {
  capa1.style.opacity = "100%"
});

capa2.addEventListener("dragover", (event) => {
  capa2.style.backgroundColor = "red"
  event.preventDefault();
});
capa2.addEventListener("dragleave", (event) => {
  capa2.style.backgroundColor = "white"
});

capa2.addEventListener("drop", (event) => {
  event.preventDefault();
  capa1.remove()
  capa2.textContent = "Lo has logrado"
});