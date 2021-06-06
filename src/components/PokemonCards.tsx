import { Stack, Text, Image, Box, SimpleGrid, Badge } from '@chakra-ui/react';
import * as React from 'react';
import { Pokemon } from '../pokeTypes';

interface Props {
    pokemons: Pokemon[];
}
const PokemonCards: React.FC<Props> = ({ pokemons }) => {
    return (
        <SimpleGrid columns={3} gap={3}>
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
                            <Text color='white' fontSize='xl' fontWeight='600'>
                                {name.toUpperCase()}
                            </Text>
                            <Text color={`${types[0].type.name}.600`} marginLeft='auto'>
                                #{id}
                            </Text>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between'>
                            <Stack>
                                {types.map(badgeType => {
                                    const { type } = badgeType;
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
    );
};

export default PokemonCards;
