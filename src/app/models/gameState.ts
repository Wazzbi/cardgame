import { CardData } from './cardData';
import { GamePokeData } from './gamePokeData';
export interface GameState {
    game: {
        score: {
            player: number,
            opponent: number
        }
    };
    players: {
        player: {
            activePokemon: GamePokeData;
            hand: {
                cards: CardData[],
            }
        },
        opponent: {
            activePokemon: GamePokeData;
            hand: {
                cards: CardData[],
            }
        }
    };
}
