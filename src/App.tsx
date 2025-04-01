import "./App.css"
import PokemonCard from "./Components/PokemonCard.tsx";

const pokemonList = [
    {
        name: "Ronflex",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {   name: "mew"
    }
]

function App() {
  return (
        <div className="Pokemoncard">
          <PokemonCard pokemon={pokemonList[0]} />
        </div>

  )
}
export default App