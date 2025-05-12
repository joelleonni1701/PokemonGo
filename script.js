

//elementos html
let $input_form = document.getElementById("input_form")
let $input=document.getElementById("input")
let $pokedex_nome = document.getElementById("pokedox_nome")
let $pokemon_id = document.getElementById("pokemon_id")
let $imagem_pokedex = document.getElementById("imagem_pokedex")

//função pegarpokemon

async function PegarPokemon(pokedex) {
    const URL =`https://pokeapi.co/api/v2/pokemon/${pokedex}`
    let respose = await(fetch(URL))

    if(respose.status===200){
        let pokemon_obj = await(respose.json())
        console.log(pokemon_obj)
        return pokemon_obj
    }
    
}

//Função MostrarPokemon

async function MostrarPokemon(pokemon) {
    let pokemon_infos = await PegarPokemon(pokemon)

    if(pokemon_infos){
        $pokedex_nome.innerText = pokemon_infos.name
        $imagem_pokedex.src = pokemon_infos.sprites.front_default

    }
}

//Eventlistener
$input_form.addEventListener('submit',(event)=>{
    event.preventDefault()
    MostrarPokemon($input.value.toLowerCase())
})



async function PrintPokemon(pokedex){
    let pokemon_obj = (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedex}`)).json()
    console.log(await(pokemon_obj))
    console.log(pokemon_obj.id)
    console.log(pokemon_obj.nome)
}