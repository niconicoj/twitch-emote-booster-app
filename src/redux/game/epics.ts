import { RootAction, RootState } from 'MyTypes';
import { Epic } from 'redux-observable';
import { filter, mergeMap } from 'rxjs/operators';

import * as EmotesActions from '../emotes/actions';
import * as StatusActions from '../status/actions';
import { ActionTypes } from './constants';

import { isOfType } from 'typesafe-actions';
import { gameActions } from '.';

export const initGame: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => 
  action$.pipe(
    filter(isOfType(ActionTypes.INIT)),
    mergeMap(action => [
      StatusActions.change("LOADING"),
      EmotesActions.fetch(action.payload.difficulty.emoteCount)
    ])
  );

export const checkGuess: Epic<RootAction, RootAction, RootState> = ( 
  action$,
  state$
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.GUESS)),
    mergeMap( action => {
      if(state$.value.game.game.guess === state$.value.emotes.emotes[state$.value.game.game.emoteIndex].code){
        return [gameActions.next()];
      } else {
        return [
          gameActions.over(),
          StatusActions.change("GAME_OVER")
        ]
      }
    }
  ));

export const StartGame: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isOfType(ActionTypes.START)),
    mergeMap(action => [
      gameActions.next(),
      StatusActions.change("IN_GAME")
    ])
  )