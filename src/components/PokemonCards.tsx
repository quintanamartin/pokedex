import {Stack, Text, Image, Box, SimpleGrid, Badge, Flex} from "@chakra-ui/react";
import * as React from "react";

import {Pokemon} from "../pokeTypes";

interface Props {
  pokemons: Pokemon[];
  setSelectedPokemons: any;
}
const PokemonCards: React.FC<Props> = ({pokemons, setSelectedPokemons}) => {
  return (
    <Flex>
      <SimpleGrid columns={3} gap={3} w="100%">
        {pokemons.map((pokemon) => {
          const {id, name, sprites, types} = pokemon;

          return (
            <Stack
              key={id}
              backgroundColor={`${pokemon.types[0].type.name}`}
              borderRadius={12}
              cursor="pointer"
              padding={2}
              position="relative"
              spacing={4}
              onClick={() => setSelectedPokemons(pokemon)}
            >
              <Stack align="center" direction="row" justify="space-between">
                <Text color="white" fontSize="xl" fontWeight="600">
                  {name.toUpperCase()}
                </Text>
                <Text fontWeight="600" marginLeft="auto">
                  #{id}
                </Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  {types.map((badgeType) => {
                    const {type} = badgeType;

                    return (
                      <Badge key={type.name} colorScheme={`${type.name}.600`}>
                        {type.name}
                      </Badge>
                    );
                  })}
                </Stack>
                <Image
                  height={24}
                  src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                  width={24}
                />
              </Stack>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default PokemonCards;
