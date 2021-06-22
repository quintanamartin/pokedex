import {Box, Button, Center, HStack, Input, Text} from "@chakra-ui/react";
import * as React from "react";

import searchPokemon from "../searchApi";

interface MyProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setPokemon: Function;
}
const FormContainer: React.FC<MyProps> = ({setPokemon}: any) => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [pokemonToSearch, setpokemonToSearch] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState({});

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setpokemonToSearch(searchedPokemon);
    console.log("pokemontosearch", pokemonToSearch);
  };

  React.useEffect(() => {
    if (pokemonToSearch === "") {
      console.log("entro al if que no deberia");

      return;
    }
    searchPokemon(pokemonToSearch).then((result) => setPokemon(result));
  }, [pokemonToSearch]);

  return (
    <>
      <Center>
        <Text fontWeight={600}> Search your favorite pokemon:</Text>
        <Box>
          <form onSubmit={handleSubmit}>
            <HStack>
              <Input
                ml={4}
                name="searchInput"
                placeholder="Example: Pikachu"
                value={searchedPokemon}
                onChange={(e) => setSearchedPokemon(e.target.value)}
              />
              <Button colorScheme="teal" size="md" type="submit">
                Search
              </Button>
            </HStack>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default FormContainer;
