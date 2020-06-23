export interface GamePokeData {
    health: number;
    attack: number;
    speed: number;
    defense: number;
    images: {
        pokemonGif: string;
        pokemonImg: string;
    };
    originStats: {
        health: number;
        attack: number;
        speed: number;
        defense: number;
    };
}
