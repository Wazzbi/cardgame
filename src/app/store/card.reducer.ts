import { createReducer, on } from '@ngrx/store';
import * as CardActions from './card.actions';

export const initialState = {
    players: {
        player: {
            activePokemon: {
                health: null,
                speed: null,
                attack: null,
                defense: null
            }
        },
        opponent: {
            activePokemon: {
                health: null,
                speed: null,
                attack: null,
                defense: null
            }
        }
    }
};

// TODO: ukládat i obrázky (aspoň url)
const _cardReducer = createReducer(initialState,
    on(CardActions.addCardPlayer, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            player: {
                ...state.players.player,
                activePokemon: {
                    ...payload
                }
            }
        }
    })),
    on(CardActions.addCardOpponent, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            opponent: {
                ...state.players.player,
                activePokemon: {
                    ...payload
                }
            }
        }
    })),
    on(CardActions.removeCardPlayer, state => ({
        ...state,
        players: {
            ...state.players,
            player: {
                ...state.players.player,
                activePokemon: {
                    ...state.players.player.activePokemon,
                    health: null,
                    speed: null,
                    attack: null,
                    defense: null
                }
            }
        }
    })),
    on(CardActions.removeCardOpponent, state => ({
        ...state,
        players: {
            ...state.players,
            opponent: {
                ...state.players.player,
                activePokemon: {
                    ...state.players.player.activePokemon,
                    health: null,
                    speed: null,
                    attack: null,
                    defense: null
                }
            }
        }
    })),
);

export function cardReducer(state, action) {
    return _cardReducer(state, action);
}