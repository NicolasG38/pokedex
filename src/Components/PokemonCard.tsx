const pokemonList = [
    {
        name: "Ronflex",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {   
        name: "Mew"
    }
];

function PokemonCard() {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <figure key={index}>
                    {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
                    {pokemon.name ? <figcaption>{pokemon.name}</figcaption> : <p>???</p>}
                </figure>
            ))}
        </div>
    );
}


export default PokemonCard;


