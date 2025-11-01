class Punto{
    constructor(x,y){
        if (typeof x === 'number'){
            this.x = x
        }else{
            this.x = 0
        }
        if (typeof y === 'number'){
            this.y = y
        }else{
            this.y = 0
        }
    }
    imprimir(){
        let texto = `Las coordenadas son ${this.x},${this.y}`
        return texto
    }
    cambiar(newX, newY){
        if (typeof newX === 'number'){
            this.x = newX
        }else{
            this.x = 0
        }
        if (typeof newY === 'number'){
            this.y = newY
        }else{
            this.y = 0
        }
    }
    copia(){
        let copia = this
        return copia
    }
    suma(z){
        let total = this.x+this.y+z
        return total
    }
}


function p1(){
    let puntoInvalido = new Punto("a", "b")
    console.log(puntoInvalido)
    let punto1 = new Punto(1, 2)
    console.log(punto1)
    puntoInvalido.cambiar(5,6)
    console.log(puntoInvalido)
}

function p2(){

}

function p3(){

}