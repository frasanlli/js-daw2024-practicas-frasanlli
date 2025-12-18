//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener("load", () => {
  obtenerUsuario();
});

function obtenerUsuario() {
  var foto = document.getElementById("foto")
  var nombre = document.getElementById("name");
  var direccion = document.getElementById("direccion");
  var emailTag = document.getElementById("email");
  var region = document.getElementById("region");

  //Llamar a la api
  fetch(`https://randomuser.me/api/`, {mode: "no-cors"})
    //respuesta de la api
    .then((response) => {
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
      const usuario = data.results[0];
      console.log("USUARIO: "+ Object.keys(usuario))
      console.log("PICTURE: "+ Object.keys(usuario.picture))
      console.log("LOCATION: "+ Object.keys(usuario.location))
      console.log("STREET: "+ Object.keys(usuario.location.street))
      //

      foto.src = usuario.picture.thumbnail;
      nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;
      emailTag.textContent = usuario.email;
      direccion.textContent = `${usuario.location.street.number} ${usuario.location.street.name}`;
      region.textContent = `${usuario.location.city} (${usuario.location.state.toUpperCase()})`;
    })
    .catch((error) => {
      console.error(`HTTP error! status: ${error.message}`);
    });
}
