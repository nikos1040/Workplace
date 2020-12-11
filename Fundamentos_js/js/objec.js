var niko = {
    nombre:'Nikodemos',
    apellido:'Hernandez',
    edad:29
}
var dane = {
    nombre:'Danelys',
    apellido:'Sanchez',
    edad:30
}

function imprimir(persona) {
    var {nombre} = persona
    console.log(nombre)

}

imprimir(niko)
imprimir(dane)

function cumpleannos(persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
    
}