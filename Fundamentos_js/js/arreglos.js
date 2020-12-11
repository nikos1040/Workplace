let niko = {
    nombre:'Niko',
    apellido:'Hernandez',
    altura:1.86
}
let dane = {
    nombre:'Danelys',
    apellido:'Sanchez',
    altura:1.56
}
let vane = {
    nombre:'Vanessa',
    apellido:'Hernandez',
    altura:1.76
}
let judi = {
    nombre:'Judith',
    apellido:'Hernandez',
    altura:1.46
}

const esAlta = persona => {
    persona.altura > 1.8
}

let personas = [niko, dane, vane, judi]

let personasAltas = personas.filter(esAlta)

const pasarAlturaCms = persona => ({
        ...persona,
        altura: persona.altura * 100
    }) 

let personasCms = personas.map(pasarAlturaCms)

// let acum = 0

// for (let index = 0; index < personasCms.length; index++) {
//     acum = acum + personasCms[index].altura
    
// }

const reducer = (acum, persona) => {
    return acum + persona.altura
}

let totalAltura = personasCms.reduce(reducer, 0)

console.log(totalAltura)

func    