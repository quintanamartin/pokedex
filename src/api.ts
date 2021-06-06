import { Pokemon } from './pokeTypes';

const pageSize = 30;
const url = 'https://pokeapi.co/api/v2/pokemon/';

export default {
    list: (page: number = 1): Promise<Pokemon[]> => {
        return Promise.all(
            new Array(page * pageSize + 1)
                .fill(true)
                .map((_, index) => index)
                .slice(1)
                .map(id => fetch(`${url}${id}`).then(res => res.json()))
        );
    },
};
