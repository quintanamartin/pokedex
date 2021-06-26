import {Box, Center, HStack, Input, Text} from "@chakra-ui/react";
import * as React from "react";

import {Pokemon} from "../pokeTypes";

interface MyProps {
  setPokemonToSearch: (value: Pokemon) => void;
  pokemonToSearch: Pokemon;
}
const FormContainer: React.FC<MyProps> = ({pokemonToSearch, setPokemonToSearch}: any) => {
  return (
    <>
      <Center>
        <Text fontWeight={600}> Search your favorite pokemon:</Text>
        <Box>
          <HStack>
            <Input
              ml={4}
              name="searchInput"
              placeholder="Example: Pikachu"
              value={pokemonToSearch}
              onChange={(e) => setPokemonToSearch(e.target.value)}
            />
          </HStack>
        </Box>
      </Center>
    </>
  );
};

export default FormContainer;
