class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (fn) {
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
           fn(nombre, apellido) 
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn) {
           fn(nombre, apellido, true) 
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Bien dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Hola ${nombre} Desarrolldor`)
    }
}

let dane = new Persona('Danelys', 'Sanchez', 1.65)
let judi = new Persona('Judith', 'Quijada', 1.55)
let niko = new Desarrollador('Nikos', 'Hernandez', 1.86)

niko.saludar(responderSaludo)
dane.saludar(responderSaludo)
judi.saludar()