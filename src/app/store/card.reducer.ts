import { PokeData } from 'src/app/models/pokeData';
import { CardData } from './../models/cardData';
import { createReducer, on } from '@ngrx/store';
import * as CardActions from './card.actions';
import * as GameActions from './game.actions';
import * as HandCardActions from './hand-card.actions';

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
                defense: null,
                originStats: {
                    health: null,
                    speed: null,
                    attack: null,
                    defense: null
                }
            },
            hand: {
                cards: [],
            }
        },
        opponent: {
            activePokemon: {
                health: null,
                speed: null,
                attack: null,
                defense: null,
                originStats: {
                    health: null,
                    speed: null,
                    attack: null,
                    defense: null
                }
            },
            hand: {
                cards: [],
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
                    ...payload,
                    originStats: {...payload}
                }
            }
        }
    })),
    on(CardActions.addCardOpponent, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            opponent: {
                ...state.players.opponent,
                activePokemon: {
                    ...payload,
                    originStats: {...payload}
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
                ...state.players.opponent,
                activePokemon: {
                    ...state.players.opponent.activePokemon,
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
    on(HandCardActions.addCardToPlayesHand, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            player: {
                ...state.players.player,
                hand: {
                    cards: [...state.players.player.hand.cards, {
                        ...payload,
                        cardIndexInHand: state.players.player.hand.cards.length
                    }]
                }
            }
        }
    })),
    on(HandCardActions.addCardToOpponentsHand, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            opponent: {
                ...state.players.opponent,
                hand: {
                    cards: [...state.players.opponent.hand.cards, {
                        ...payload,
                        cardIndexInHand: state.players.opponent.hand.cards.length
                    }]
                }
            }
        }
    })),
    on(HandCardActions.removeCardFromPlayersHand, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            player: {
                ...state.players.player,
                hand: {
                    cards: state.players.player.hand.cards.filter((card: CardData) => card.cardIndexInHand !== payload)
                }
            }
        }
    })),
    on(HandCardActions.removeCardFromOpponentsHand, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            opponent: {
                ...state.players.opponent,
                hand: {
                    cards: state.players.opponent.hand.cards.filter((card: CardData) => card.cardIndexInHand !== payload)
                }
            }
        }
    })),
    on(HandCardActions.apllyCardEffectToPlayersActivePokemon, (state, { payload }) => ({
        ...state,
        players: {
            ...state.players,
            player: {
                ...state.players.player,
                activePokemon: {
                    ...state.players.player.activePokemon,
                    [payload.toChange]: state.players.player.activePokemon[payload.toChange] + payload.value
                }
            }
        }
    }))

);

export function cardReducer(state, action) {
    return _cardReducer(state, action);
}