import {Stack} from "@chakra-ui/react";
import * as React from "react";

import api from "../../api";
import {Pokemon} from "../../pokeTypes";
import FormContainer from "../FormContainer";
import Header from "../Header";
import PokemonCards from "../PokemonCards";
import PokemonModal from "../PokemonModal";

const Home: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon | null>(null);
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    api.list(page).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, [page]);

  return (
    <>
      <Stack padding={5} spacing={5}>
        <Header />
        <FormContainer />
        <PokemonCards pokemons={pokemons} setSelectedPokemons={setSelectedPokemon} />
      </Stack>
      {selectedPokemon && (
        <PokemonModal selectedPokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </>
  );
};

export default Home;
