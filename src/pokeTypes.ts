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
}

interface Types {
    slot: number;
    type: { name: string; url: string };
}
