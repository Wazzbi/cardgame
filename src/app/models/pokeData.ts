export interface PokeData {
    health: number;
    attack: number;
    speed: number;
    defense: number;
    originStats: PokeData;
    pokemonGif: string;
    pokemonImg: string;
}
