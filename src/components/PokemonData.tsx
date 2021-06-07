import * as React from 'react';
import { Pokemon } from '../pokeTypes';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Stack,
    Text,
    Heading,
    ListItem,
    ListIcon,
    List,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
type Props = {
    selectedPokemon: Pokemon;
};
const PokemonData: React.FC<Props> = ({ selectedPokemon }: Props) => {
    console.log('🚀 ➡ selectedPokemon', selectedPokemon);
    const { name, id, height, weight, abilities, types } = selectedPokemon;
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <Tabs variant='soft-rounded'>
            <TabList>
                <Tab>Info</Tab>
                <Tab>Stats</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Stack spacing={3}>
                        <table>
                            <tbody>
                                <tr>
                                    <Text as='td' color='gray.500' width={32}>
                                        Name
                                    </Text>
                                    <td>{capitalizedName}</td>
                                </tr>
                                <tr>
                                    <Text as='td' color='gray.500' width={32}>
                                        ID
                                    </Text>
                                    <td>#{id}</td>
                                </tr>
                                <tr>
                                    <Text as='td' color='gray.500' width={32}>
                                        Height
                                    </Text>
                                    <td>{height}</td>
                                </tr>
                                <tr>
                                    <Text as='td' color='gray.500' width={32}>
                                        Weight
                                    </Text>
                                    <td>{weight}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Heading fontSize='md'>Abilities</Heading>
                        <List spacing={3}>
                            {abilities.map(abilityList => {
                                const { ability } = abilityList;
                                const abilityCapitalized = ability.name.charAt(0).toUpperCase() + ability.name.slice(1);
                                return (
                                    <ListItem key={ability.name}>
                                        <ListIcon as={StarIcon} color={types[0].type.name} />
                                        {abilityCapitalized}
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Stack>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default PokemonData;
