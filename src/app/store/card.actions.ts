import { PokeData } from 'src/app/models/pokeData';
import { createAction, props } from '@ngrx/store';

export const addCardPlayer = createAction(
    '[Card Component] Add Card Player',
    props<{ pokeData: PokeData }>());
export const addCardOpponent = createAction(
    '[Card Component] Add Card Opponent',
    props<{ pokeData: PokeData }>());
export const removeCardPlayer = createAction(
    '[Card Component] Remove Card Player');
export const removeCardOpponent = createAction(
    '[Card Component] Remove Card Opponent');
