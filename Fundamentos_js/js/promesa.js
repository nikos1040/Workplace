const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'pokemon/:id'
const opts = { crossDomain: true}

function pokemon(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $__
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el pokemon con id = ${id}.`)
}

async function pokemons() {
    var ids = []
    for (let i = 1; i <= 10; i++) {
        ids.push(i)
    }
    var promesas = ids.map( id => pokemon(id) )

    try {
        var poke = await Promise.all(promesas)
        console.log(poke)
    } catch (id) {
        onError(id)
    }
}

pokemons()
