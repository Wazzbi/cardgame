import { createAction, props } from '@ngrx/store';

export const increaseScorePlayer = createAction(
    '[Game Component] Increase Score Player',
    props<{ payload: number }>());
export const increaseScoreOpponent = createAction(
    '[Game Component] Increase Score Opponent',
    props<{ payload: number }>());
export const resetScorePlayer = createAction(
    '[Game Component] Reset Score Player');
export const resetScoreOpponent = createAction(
    '[Game Component] Reset Score Opponent');
export const resetScoreAll = createAction(
    '[Game Component] Reset Score All');
export const split = createAction(
    '[Game Component] Split');
