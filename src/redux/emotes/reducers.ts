import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';
import { Emote, Fetch } from './models';
import { ActionTypes } from './constants';

export type EmotesAction = ActionType<typeof actions>;

export type EmotesState = Readonly<{
  emotes: Emote[],
  fetch: Fetch
}>;

const initialState: EmotesState = {
  emotes: [],
  fetch: {
    fetching: false,
  }
}

const emotes = createReducer(initialState.emotes)
  .handleType(
    ActionTypes.SUCCESS, (_state, action) => action.payload.emotes
  );

const fetch = createReducer(initialState.fetch)
  .handleType(
    ActionTypes.FETCH, () => {
      return {
        fetching: true
      }
    }
  )
  .handleType(
    ActionTypes.SUCCESS, () => {
      return {
        fetching: false
      }
    }
  )
  .handleType(
    ActionTypes.ERROR, (_state, action) => {
      return {
        fetching: false,
        error: {
          message: action.payload.message
        }
      }
    }
  )

export default combineReducers({
  emotes,
  fetch
});