import {Pokemon} from "./pokeTypes";

const pageSize = 151;
const url = "https://pokeapi.co/api/v2/pokemon/";

const getAllPokemons = {
  list: (page = 1): Promise<Pokemon[]> => {
    return Promise.all(
      new Array(page * pageSize + 1)
        .fill(true)
        .map((_, index) => index)
        .slice(1)
        .map((id) => fetch(`${url}${id}`).then((res) => res.json())),
    );
  },
};

export default getAllPokemons;
