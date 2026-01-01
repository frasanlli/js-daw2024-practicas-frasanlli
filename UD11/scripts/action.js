const BASE_URL = "https://dummyjson.com/products/";
const POSTMAN_URL = "https://httpbin.org/post";

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener("load", (ev) => {
  let numsecs = document.getElementById("numsecs");
  let product_id = document.getElementById("product_id");
  let boton = document.querySelector("button");

  boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, product_id.value);
  });
});

function clearFields() {
  document.querySelectorAll("span").forEach((element) => {
    element.innerHTML = "";
    console.log(element);
  });
}

async function procesarFetch(numsecs, product_id) {
  var statusTag = document.getElementById("status");
  var idTag = document.getElementById("id");
  var titleTag = document.getElementById("title");
  var priceTag = document.getElementById("price");

  console.log(`${BASE_URL}${product_id}?delay=${numsecs}`)
  //Llamar a la api
  await fetch(`${BASE_URL}${product_id}?delay=${numsecs}`)
    //respuesta de la api
    .then((response) => {
      console.log(response.ok)
      //indicamos el valor del estado de la respuesta
      statusTag.textContent = response.status;
      //Si la respuesta es correcta devolvemos los datos como un JSON para que los tome el siguiente then
      if (response.ok) {
        return response.json();

      }//si no es correcta,
      else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("data "+data)
      //en este caso solo se obtiene un producto, así que usamos el primer y único resultado de la array
      console.log("PRODUCTO: " + Object.keys(data));
      //
      idTag.textContent = data.id;
      titleTag.textContent = data.title;
      priceTag.textContent = `${data.price}€`;
      addProducto(data.id, data.title, data.price);
    })
    .catch((error) => {
      console.error(`HTTP error! status: ${error.message}`);
    });
}

async function addProducto(id, title, price) {
  var statusTag = document.getElementById("status");
  var titleTag = document.getElementById("title");
  const producto = {
    id_producto: id,
    nombre: title,
    precio: `${price}€`
  };

  await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
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
      console.log("data.data:", data.data);
      const objetoPosteado = JSON.parse(data.data);
      titleTag.textContent = objetoPosteado.nombre;
    })
    .catch((error) => {
      console.error("Error en la petición:", error);
    });
}
