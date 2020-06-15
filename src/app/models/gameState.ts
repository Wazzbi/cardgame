import { PokeData } from 'src/app/models/pokeData';
import { CardData } from './cardData';
export interface GameState {
    game: {
        score: {
            player: number,
            opponent: number
        }
    };
    players: {
        player: {
            activePokemon: PokeData;
            hand: {
                cards: CardData[],
            }
        },
        opponent: {
            activePokemon: PokeData;
            hand: {
                cards: CardData[],
            }
        }
    };
}
