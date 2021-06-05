import { SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import api from '../../api';
import { Pokemon } from '../../pokeTypes';
import FormContainer from '../FormContainer';
import Header from '../Header';
import PokemonCards from '../PokemonCards';

const Home: React.FC = () => {
    const [page, setPage] = React.useState<number>(1);

    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

    React.useEffect(() => {
        api.list(page).then(pokemons => {
            console.log('🚀 ➡ api.list ➡ pokemons', pokemons);
            setPokemons(pokemons);
        });
    }, [page]);
    return (
        <>
            <Stack padding={5} spacing={5}>
                <Header />
                <FormContainer />
                <PokemonCards pokemons={pokemons} />
            </Stack>
        </>
    );
};

export default Home;
