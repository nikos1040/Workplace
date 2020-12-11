const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:id'

const opts = { crossDomain: true}

function pokemon(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${POKE_URL.replace(':id', id)}`

        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id)
        )
    })
}

function onError(id) {
    console.log(`Error ${id}`)
}

async function pokemons() {
    let ids = []
    for (let i = 1; i <= 10; i++) {
        ids.push(i)
    }
    let promesas = ids.map( id => pokemon(id))
    try {
        let poke = await Promise.all(promesas)
        console.table(poke)
    } catch (id) {
        onError(id)
    }
}

pokemons()