import {Stack} from "@chakra-ui/react";
import * as React from "react";

import getAllPokemons from "../../getApi";
import {Pokemon} from "../../pokeTypes";
import Footer from "../Footer";
import FormContainer from "../FormContainer";
import Header from "../Header";
import PokemonCards from "../PokemonCards";
import PokemonModal from "../PokemonModal";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon | null>(null);
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [pokemonToSearch, setPokemonToSearch] = React.useState<any>("");
  const [search, setSearch] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    getAllPokemons.list().then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  React.useMemo(() => {
    const list = pokemons.filter((pokemon) => {
      return pokemon.name.includes(pokemonToSearch);
    });

    setSearch(list);
  }, [pokemonToSearch, pokemons]);

  return (
    <>
      <Stack padding={5} spacing={5}>
        <Header />
        <FormContainer pokemonToSearch={pokemonToSearch} setPokemonToSearch={setPokemonToSearch} />
        {search.length > 0 ? (
          <PokemonCards pokemons={search} setSelectedPokemons={setSelectedPokemon} />
        ) : (
          <PokemonCards pokemons={pokemons} setSelectedPokemons={setSelectedPokemon} />
        )}
        <Footer />
      </Stack>
      {selectedPokemon && (
        <PokemonModal selectedPokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </>
  );
};

export default Home;
