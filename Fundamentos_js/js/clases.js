class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

let dane = new Persona('Danelys', 'Sanchez', 1.65)
let niko = new Desarrollador('Nikos', 'Hernandez', 1.86)
let judi = new Persona('Judith', 'Quijada', 1.55)


console.log(
    niko.saludar()
)
console.log(
    dane.saludar()
)

// console.log(
//     Persona
// )
// console.log(
//     Persona.prototype
// )
// console.log(
//     Desarrollador
// )
// console.log(
//     judi.saludar()
// )

// console.log(
//     niko.soyAlto()
// )

// console.log(
//     judi.soyAlto()
// )

// console.log(
//     dane.soyAlto()
// )