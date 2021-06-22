import {Center, Stack} from "@chakra-ui/react";
import * as React from "react";

import getAllPokemons from "../../getApi";
import {Pokemon} from "../../pokeTypes";
import Footer from "../Footer";
import FormContainer from "../FormContainer";
import Header from "../Header";
import PokemonCards from "../PokemonCards";
import PokemonModal from "../PokemonModal";

const Home: React.FC = () => {
  const [page, setPage] = React.useState<number>(3);
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon | null>(null);
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [search, setSearch] = React.useState<Pokemon[]>([]);

  console.log(search);
  React.useEffect(() => {
    getAllPokemons.list(page).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  React.useEffect(() => {
    if (Object.keys(search).length > 0) {
      console.log("entro al useEffect");
      setPokemons(search);
    }
  }, [search]);

  return (
    <>
      <Stack padding={5} spacing={5}>
        <Header />
        <FormContainer setPokemon={setSearch} />
        <PokemonCards pokemons={pokemons} setSelectedPokemons={setSelectedPokemon} />
        <Footer />
      </Stack>
      {selectedPokemon && (
        <PokemonModal selectedPokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </>
  );
};

export default Home;
