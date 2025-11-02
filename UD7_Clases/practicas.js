class Punto {
  constructor(x, y) {
    if (Number.isInteger(x)) {
      this.x = x;
    } else {
      this.x = 0;
    }

    if (Number.isInteger(y)) {
      this.y = y;
    } else {
      this.y = 0;
    }
  }

  imprimir() {
    let texto = `(${this.x},${this.y})`;
    return texto;
  }

  cambiar(newX, newY) {
    if (Number.isInteger(newX)) {
      this.x = newX;
    } else {
      this.x = 0;
    }
    if (Number.isInteger(newY)) {
      this.y = newY;
    } else {
      this.y = 0;
    }
  }

  copia() {
    let copia = this;
    return copia;
  }

  suma() {
    let x2 = parseInt(prompt("Introduce la coordenada 2 x:"));
    let y2 = parseInt(prompt("Introduce la coordenada 2 y:"));
    let sumaPunto = new Punto(x2, y2);
    let total = new Punto(this.x + sumaPunto.x, this.y + sumaPunto.y);
    return total;
  }
}

function p1() {
  let x = parseInt(prompt("Introduce la coordenada x:"));
  let y = parseInt(prompt("Introduce la coordenada y:"));
  let punto1 = new Punto(x, y);
  let opcion = "";
  let punto2 = "";
  let newX = "";
  let newY = "";
  let total = "";
  while (opcion != null) {
    opcion = prompt(
      `Introduce la opción deseada para la coordenada ${punto1.imprimir()}:\n a-Cambiar coordenada \n b-Copiar coordenada \n c-Sumar coordenadas \n Cancelar para salir`,
      ""
    );
    if (opcion != null) {
      if (opcion.toLowerCase() == "a") {
        newX = parseInt(
          prompt(`Cambiar la coordenada x: actualmente ${punto1.x}`)
        );
        newY = parseInt(
          prompt(`Cambiar la coordenada y: actualmente ${punto1.y}`)
        );
        punto1.cambiar(newX, newY);
      } else if (opcion.toLowerCase() == "b") {
        punto2 = punto1.copia();
        window.alert(
          `Coordenada 1: ${punto1.imprimir()} copiada en Coordenada 2: ${punto2.imprimir()}`
        );
      } else if (opcion.toLowerCase() == "c") {
        total = punto1.suma();
        window.alert(`Resultado de la suma = ` + total.imprimir());
      }
    }
  }
}

Array.prototype.media = function () {
  if (this.length === 0) {
    return 0;
  }

  var suma = this.reduce(function (acumulador, valor) {
    if (typeof valor === "number" && !isNaN(valor)) {
      return acumulador + valor;
    } else {
      return acumulador;
    }
  }, 0);

  var cantidad = this.filter(function (valor) {
    return typeof valor === "number" && !isNaN(valor);
  }).length;

  if (cantidad > 0) {
    return suma / cantidad;
  } else {
    return 0;
  }
};

function p2() {
  var entrada = prompt(
    "Introduce una lista de números separados por comas:\n(ejemplo: 5, 8, 10, 2)"
  );

  var comas = entrada.split(",");
  var numeros = [];

  for (var i = 0; i < comas.length; i++) {
    var num = parseFloat(comas[i].trim());
    if (!isNaN(num)) {
      numeros.push(num);
    }
  }

  var resultado = numeros.media();
  alert(`Array introducido: ${numeros} \nMedia: ${resultado}`)
}

class Ordenador {
  constructor(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
    if (!marca || !modelo) {
      throw new Error("La marca y el modelo son obligatorios");
    }

    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;
  }

  toString() {
    return `Ordenador:
    Marca: ${this.marca}
    Modelo: ${this.modelo}
    RAM: ${this.ram} GB
    Disco duro: ${this.disco} GB
    Pantalla: ${this.pulgadas} pulgadas`;
  }
}

class Portatil extends Ordenador {
  constructor(
    marca,
    modelo,
    ram = 4,
    disco = 256,
    pulgadas = 12,
    autonomia = 4
  ) {
    super(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;
  }

  toString() {
    return super.toString() + `\n    Autonomía: ${this.autonomia}h`;
  }
}
function leerDato(mensaje) {
  const valor = prompt(mensaje);
  return valor === "" ? null : valor;
}

function p3(opcion) {
  let marca = null;
  let modelo = null;
  while (marca == null) {
    marca = leerDato("Introduce la marca:");
  }
  while (modelo == null) {
    modelo = leerDato("Introduce la modelo:");
  }
  let ram = leerDato("Introduce la ram (opcional):");
  let disco = leerDato("Introduce la disco (opcional):");
  let pulgadas = leerDato("Introduce las pulgadas del monitor (opcional):");
  if (opcion) {
    let autonomia = leerDato(
      "Introduce las autonomía del portátil (opcional):"
    );
    const portatil = new Portatil(
      marca,
      modelo,
      ram,
      disco,
      pulgadas,
      autonomia
    );
    window.alert(portatil.toString());
  } else {
    const ordenador = new Ordenador(marca, modelo, ram, disco, pulgadas);
    window.alert(ordenador.toString());
  }
}
