interface Pokemon {
    name: string,
    imgSrc?: string,
}

const pokemonList = [
    {
        name: "Ronflex",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {
        name: "mew"
    }
]

function PokemonCard({name, imgSrc}: Pokemon) {
    return (
        <figure>
            {imgSrc ? <img src={imgSrc} alt={name}/> : <p>???</p>}
            {name ? <figcaption>{name}</figcaption> : <p>???</p>}
        </figure>
    )
}

export default PokemonCard;


