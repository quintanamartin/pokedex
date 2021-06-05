import { Stack, Text, Image, Box, SimpleGrid, Badge } from '@chakra-ui/react';
import * as React from 'react';
import { Pokemon } from '../pokeTypes';

interface Props {
    pokemons: Pokemon[];
}
const PokemonCards: React.FC<Props> = ({ pokemons }) => {
    return (
        <SimpleGrid columns={2} gap={3}>
            {pokemons.map(pokemon => {
                const { id, name, sprites, types } = pokemon;
                console.log('🚀 ➡ types', types);
                return (
                    <Stack
                        backgroundColor={`${pokemon.types[0].type.name}.300`}
                        key={id}
                        borderRadius={12}
                        padding={2}
                        position='relative'
                        spacing={4}
                    >
                        <Stack align='center' direction='row' justify='space-between'>
                            <Text color='white' fontSize='lg' fontWeight='600'>
                                {name}
                            </Text>
                            <Text color={`${types[0].type.name}.600`} marginLeft='auto'>
                                #{id}
                            </Text>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between'>
                            <Stack>
                                {types.map(type => {
                                    return (
                                        <Badge key={type.type.name} colorScheme={`${types[0].type.name}.900`}>
                                            {type.type.name}
                                        </Badge>
                                    );
                                })}
                            </Stack>
                            <Image height={24} src={sprites.front_default} width={24} />
                        </Stack>
                    </Stack>
                );
            })}
        </SimpleGrid>
    );
};

export default PokemonCards;