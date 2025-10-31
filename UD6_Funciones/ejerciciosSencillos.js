console.log ("EJER 1.1");
//1.1
function tradicional(num1){
  return Math.pow(num1, 2)
}
console.log(tradicional(5))

console.log ("EJER 1.2");
//1.2
(function () {
	let contador = 0
  contador++
  console.log (`valor del contador dentro: ${contador}`);
})();
//Pongo typeof para que no de error y poder corregir más rápido
console.log (`valor del contador fuera: ${typeof contador}`);

console.log ("EJER 1.3");
//1.3
(function (texto, valorNum) {
  console.log (texto+valorNum);
})("Mi número es ", 32);

console.log ("EJER 1.4");
//1.4
let parImpar = (a) => {
  if (a%2 ==0){
    return `${a} es par`
  }else{
    return `${a} es impar`
  }
}
console.log(parImpar(8))
console.log(parImpar(3))