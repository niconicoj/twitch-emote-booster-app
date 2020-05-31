import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { Game } from './models';

export const init = (difficulty: Game["difficulty"]) => action(ActionTypes.INIT, {difficulty: difficulty});
export const next = () => action(ActionTypes.NEXT);
export const start = () => action(ActionTypes.START);
export const guess = () => action(ActionTypes.GUESS);
export const over = () => action(ActionTypes.OVER);

export const update = (value: String) => action(ActionTypes.UPDATE, {value: value})