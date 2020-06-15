import { PokeData } from 'src/app/models/pokeData';
import { createAction, props } from '@ngrx/store';

// AKCE PRO AKTIVNÍ POKEMONY

export const addCardPlayer = createAction(
    '[Card Component] Add Card Player',
    props<{ payload: PokeData }>());
export const addCardOpponent = createAction(
    '[Card Component] Add Card Opponent',
    props<{ payload: PokeData }>());
export const removeCardPlayer = createAction(
    '[Card Component] Remove Card Player');
export const removeCardOpponent = createAction(
    '[Card Component] Remove Card Opponent');
