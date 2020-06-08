import { createReducer, on } from '@ngrx/store';
import * as CardActions from './card.actions';
import * as GameActions from './game.actions';

export const initialState = {
    game: {
        score: {
            player: 0,
            opponent: 0
        }
    },
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
    on(GameActions.increaseScorePlayer, (state, { payload }) => ({
        ...state,
        game: {
            score: {
                ...state.game.score,
                player: state.game.score.player + payload
            }
        }
    })),
    on(GameActions.increaseScoreOpponent, (state, { payload }) => ({
        ...state,
        game: {
            score: {
                ...state.game.score,
                opponent: state.game.score.opponent + payload
            }
        }
    })),

);

export function cardReducer(state, action) {
    return _cardReducer(state, action);
}