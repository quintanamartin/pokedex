import { Stats } from './pokeStats';

export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: Types[];
    species: string;
    stats: Stats;
    weight: string;
    height: string;
    abilities: Abilities[];
}

interface Types {
    slot: number;
    type: { name: string; url: string };
}

interface Abilities {
    /*  slot: number,
    is_hidden: boolean, */
    ability: {
        name: string;
    };
}
