import { CardData } from './../models/cardData';
import { createAction, props } from '@ngrx/store';

// AKCE PRO AKTIVNÍ POKEMONY

export const addCardToPlayesHand = createAction(
    '[Hand Card Component] Add Card to Players hand',
    props<{ payload: CardData }>());
export const addCardToOpponentsHand = createAction(
    '[Hand Card Component] Add Card to Opponents hand',
    props<{ payload: CardData }>());
export const removeCardFromPlayersHand = createAction(
    '[Hand Card Component] Remove Card from Players hand',
    props<{ payload: number }>());
export const removeCardFromOpponentsHand = createAction(
    '[Hand Card Component] Remove Card from Opponents hand',
    props<{ payload: number }>());
