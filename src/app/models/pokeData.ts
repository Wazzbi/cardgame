export interface PokeData {
    health: number;
    attack: number;
    speed: number;
    defense: number;
    pokemonGif: string;
    pokemonImg: string;
    originStats?: PokeData; // toto nejsou vstupní data z json
}
