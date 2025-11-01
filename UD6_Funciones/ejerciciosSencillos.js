function ejerciciosSencillos() {
  window.alert("EJER 1.1");
  //1.1
  function tradicional(num1){
    return Math.pow(num1, 2)
  }
  window.alert(tradicional(5))

  window.alert("EJER 1.2");
  //1.2
  (function () {
    let contador = 0
    contador++
    window.alert(`valor del contador dentro: ${contador}`);
  })();
  //Pongo typeof para que no de error y poder corregir más rápido
  window.alert(`valor del contador fuera: ${typeof contador}`);

  window.alert("EJER 1.3");
  //1.3
  (function (texto, valorNum) {
    window.alert(texto+valorNum);
  })("Mi número es ", 32);

  window.alert("EJER 1.4");
  //1.4
  let parImpar = (a) => {
    if (a%2 ==0){
      return `${a} es par`
    }else{
      return `${a} es impar`
    }
  }
  window.alert(parImpar(8))
  window.alert(parImpar(3))
}