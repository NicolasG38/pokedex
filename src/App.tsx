import "./App.css";
import PokemonCard from "./Components/PokemonCard.tsx";
import { useState } from "react";

const pokemonList = [
	{
		name: "Ronflex",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
	},
	{
		name: "Rondoudou",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
	},
	{
		name: "Insécateur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
	},
	{
		name: "Dracolosse",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
	},
];

function App() {
	const [pokemonName, setPokemonName] = useState({ name: "Ronflex" });

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName.name,
	);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name !");
	}

	return (
		<div>
			<PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
			<button type={"button"} onClick={() => {setPokemonName({ name: "Ronflex" });}}>Select Ronflex</button>
            <button type={"button"} onClick={() => {setPokemonName({ name: "Rondoudou" });}}>Select Rondoudou</button>
            <button type={"button"} onClick={() => {setPokemonName({ name: "Insécateur" });}}>Select Insécateur</button>
            <button type={"button"} onClick={() => {setPokemonName({ name: "Dracolosse" });}}>Select Dracolosse</button>
		</div>
	);
}
export default App;
