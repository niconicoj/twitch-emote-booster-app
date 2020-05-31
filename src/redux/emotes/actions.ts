import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { Emote } from './models';

// fetching and promise handling
export const fetch = (count: Number) => action(ActionTypes.FETCH, {count: count});
export const success = (emotes: Emote[]) => action(ActionTypes.SUCCESS, {emotes: emotes});
export const error = (message: string) => action(ActionTypes.ERROR, {message: message});