document.addEventListener("DOMContentLoaded", (event) => {
  checkCookie("visitas");
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  return d.toUTCString(); // devolvemos la fecha de expiración
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  let visitas = getCookie(cname);
  let expira;
  let contador = 1

  if (visitas != "") {
    if (parseInt(visitas) > 10){
      alert("Has llegado a 10 visitas. Contador reiniciado.");
      document.cookie = `${cname}=""; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }else{
      contador += parseInt(visitas);
      expira = setCookie("visitas", contador.toString(), 30);
      alert(`
        Contador de visitas: ${visitas}
        Expira el: ${expira}
        `);
    }

  } else {
    expira = setCookie("visitas", contador.toString(), 30);
    alert(`
      Contador iniciado/reiniciado: ${contador}
      Expira el: ${expira}
      `);
  }
}

