const BASE_URL = "https://reqres.in/api/users/";
const POSTMAN_URL = "https://httpbin.org/post";

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener("load", (ev) => {
  let numsecs = document.getElementById("numsecs");
  let user = document.getElementById("user");
  let boton = document.querySelector("button");

  boton.addEventListener("click", (ev) => {
    var comprobarPost = document.getElementById("comprobarPost");
    ev.preventDefault();
    clearFields();
    if (!comprobarPost.checked){
      console.log("Probando ejer completo")
      procesarFetch(numsecs.value, user.value);
    }else{
      console.log("Probando solo POST")
      addUsuario("1", "a@a.a", "pepe", "aaaa");
    }
  });
});

function clearFields() {
  document.querySelectorAll("span").forEach((element) => {
    element.innerHTML = "";
    console.log(element);
  });
}

async function procesarFetch(numsecs, user) {
  var statusTag = document.getElementById("status");
  var idTag = document.getElementById("id");
  var emailTag = document.getElementById("email");
  var nameTag = document.getElementById("name");

  //Llamar a la api
  await fetch(`${BASE_URL}${user}?delay=${numsecs}`)
    //respuesta de la api
    .then((response) => {
      //indicamos el valor del estado de la respuesta
      statusTag.textContent = response.status;
      //Si la respuesta es correcta devolvemos los datos como un JSON para que los tome el siguiente then
      if (response.ok) {
        return response.json();
        //si no es correcta,
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      //en este caso solo se obtiene un usuario, así que usamos el primer y único resultado de la array
      const usuario = data.data;
      console.log("USUARIO: " + Object.keys(usuario));
      //
      idTag.textContent = usuario.id;
      emailTag.textContent = usuario.email;
      nameTag.textContent = `${usuario.first_name} ${usuario.last_name}`;
      addUsuario(usuario.id, usuario.email, usuario.first_name, usuario.last_name);
    })
    .catch((error) => {
      console.error(`HTTP error! status: ${error.message}`);
    });
}

async function addUsuario(id, email, nombre, apellido) {
  var statusTag = document.getElementById("status");
  const usuario = {
    id_usuario: id,
    correo: email,
    nombre_completo: `${nombre} ${apellido}`
  };

  await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => {
      statusTag.textContent = response.status;
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("Respuesta del servidor:", data);
    })
    .catch((error) => {
      console.error("Error en la petición:", error);
    });
}
