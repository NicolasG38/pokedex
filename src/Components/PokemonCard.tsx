const pokemonList = [
    {
        name: "Ronflex",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {   name: "mew"
    }
]

function PokemonCard(props){
    console.log(props)
    const pokemon = pokemonList[1]

    return (
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
            {pokemon.name ? <figcaption>{pokemon.name}</figcaption> : <p>???</p>}
        </figure>
    )
}


export default PokemonCard;


