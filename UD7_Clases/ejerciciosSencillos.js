function ejerciciosSencillos() {
  window.alert("EJER 1.1");
  //1.1
  class Persona{
    constructor(nombre, edad, profesion){
      this.nombre = nombre
      this.edad = edad
      this.profesion = profesion
    }

    presentarse() {
      let presentacion = `Hola, soy ${this.nombre}. Tengo ${this.edad} y trabajo como ${this.profesion}`
      console.log(presentacion)
      window.alert(presentacion)
    }

    cumplirAnios(){
      this.edad++
    }

  }
  let persona1 = new Persona("Juan", 30, "Ingeniero")
  persona1.presentarse()

  window.alert("EJER 1.2");
  //1.2
  persona1.cumplirAnios()
  window.alert(persona1.edad)


  window.alert("EJER 1.3");
  //1.3
  class Libro{
    constructor(titulo, autor, paginas, añoPublicacion){
      this.titulo = titulo
      this.autor = autor
      this.paginas = paginas
      this.añoPublicacion = añoPublicacion
    }
    getPropiedades(){
      let nombresPropiedades = Object.getOwnPropertyNames(this)
      for (let x = 0; x < nombresPropiedades.length; x++) {
        window.alert(`${nombresPropiedades[x]}: ${this[nombresPropiedades[x]]}`);
      }
    }
  }

  let libro1 = new Libro("Cien Años de Soledad", "Ganriel García Márquez", 417, 1967)
  libro1.getPropiedades()

  window.alert("EJER 1.4");
  //1.4
  class Coche{
    constructor(marca, modelo, año){
      this.marca = marca
      this.modelo = modelo
      this.año = año
    }

    detalles(){
      let infoCoche = `La marca del coche es ${this.marca} y el modelo es ${this.modelo}. Fabricado en el año ${this.año}`
      console.log(infoCoche)
      window.alert(infoCoche)
    }

    prototipo(){
      let infoCoche = `El coche ${this.marca} ${this.modelo} ha sido encendido.`
      console.log(infoCoche)
      window.alert(infoCoche)
    }
  }

  let coche1 = new Coche("Toyota", "Corolla", 2020);
  let coche2 = new Coche("Ford", "Focus", 2018);
  coche1.detalles()
  coche2.detalles()

  window.alert("EJER 1.5");
  //1.5
  coche1.prototipo()

}