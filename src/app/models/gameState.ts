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
            activePokemon: {
                health: number,
                speed: number,
                attack: number,
                defense: number
            };
            hand: {
                cards: CardData[],
            }
        },
        opponent: {
            activePokemon: {
                health: number,
                speed: number,
                attack: number,
                defense: number
            };
            hand: {
                cards: CardData[],
            }
        }
    };
}
