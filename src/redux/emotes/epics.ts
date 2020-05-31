import { RootAction, RootState } from 'MyTypes';
import { Epic } from 'redux-observable';
import { filter, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

import * as Actions from './actions';
import * as GameActions from '../game/actions';
import * as StatusActions from '../status/actions';
import { ActionTypes } from './constants';

import { isOfType } from 'typesafe-actions';

export const fetchAction: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => 
  action$.pipe(
    filter(isOfType(ActionTypes.FETCH)),
    switchMap( action =>
      ajax(  
        {
          url: `${process.env.REACT_APP_API_URL}/api/emotes?count=${action.payload.count}&sort=count-desc`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ).pipe(
        mergeMap(response => [ 
          Actions.success(response.response),
          GameActions.start(),
          StatusActions.change("IN_GAME")
        ]),
        catchError( error => {
          return of(Actions.error('An error occured, the message could not be delivered.'));
        })
      )
    )
  );
