interface pokemon {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: pokemon) {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			{name ? <figcaption>{name}</figcaption> : <p>???</p>}
		</figure>
	);
}

export default PokemonCard;
