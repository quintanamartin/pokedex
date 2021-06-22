const singlePokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const searchPokemon = async (pokemon: string) => {
  const response = await fetch(`${singlePokemonUrl}${pokemon}`);

  const data = await response.json();
  const pokemonData = [];

  pokemonData.push(data);

  return pokemonData;
};

export default searchPokemon;
