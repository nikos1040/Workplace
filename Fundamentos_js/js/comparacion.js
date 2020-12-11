let niko = {
    nombre: 'Niko',
    apellido: 'Hernandez',
    edad: 29,
    peso: 75
}

console.log(`Al inicio del año ${niko.nombre} pesa ${niko.peso}Kg`);

const incremento = 0.3
const anno = 365

const aumentar = (persona) => persona.peso += incremento
const bajar = (persona) => persona.peso -= incremento
const come = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4

// for (let index = 0; index <= anno; index++) {
//     let random = Math.random()
//     if (random < 0.25) {
//         aumentar(niko)
//     } else if (random < 0.5) {
//         bajar(niko)
//     }
    
// }

const META = niko.peso -3
let dias = 0

while (niko.peso  > META) {
    // debugger
    if (come()) {
        aumentar(niko)
    }
    if (deporte()) {
        bajar(niko)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${niko.nombre} adelgazo 3Kg ahora tiene ${niko.peso.toFixed(1)}`)
