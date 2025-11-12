function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let promesa6 = new Promise((resolve) => {
  setTimeout(() => resolve("0"), 6000);
});

let promesa60 = new Promise((resolve) => {
  setTimeout(() => resolve("FIN"), 60000);
});

export async function cuenta(id, temporizador, intervalo = 1000) {
  let p = document.getElementById(id);
  let tiempo = temporizador*1000;
  let mensaje = ""

  while (tiempo > 0) {
    mensaje = (tiempo/1000).toString()
    p.textContent = mensaje;
    tiempo = tiempo-intervalo;
    await sleep(intervalo);
  }

  if (temporizador == 6) {
    p.textContent = await promesa6;
  } else {
    p.textContent = await promesa60;
  }
}
