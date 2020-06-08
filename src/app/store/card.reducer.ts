import { createReducer, on } from '@ngrx/store';
import {
    addCardPlayer,
    addCardOpponent,
    removeCardPlayer,
    removeCardOpponent
} from './card.actions';
 
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
  on(addCardPlayer, state => ({
      ...state,
      players: {
          ...state.players,
          player: {
              ...state.players.player,
              activePokemon: {
                  ...state.players.player.activePokemon,
                  ...addCardPlayer
              }
          }
      }
    })),
  on(addCardOpponent, state => ({
    ...state,
    players: {
        ...state.players,
        opponent: {
            ...state.players.player,
            activePokemon: {
                ...state.players.player.activePokemon,
                ...addCardOpponent
            }
        }
    }
  })),
  on(removeCardPlayer, state => ({
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
  on(removeCardOpponent, state => ({
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