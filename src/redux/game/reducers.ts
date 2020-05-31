import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';
import { Game } from './models';
import { ActionTypes } from './constants';
import _ from 'lodash';

export type GameAction = ActionType<typeof actions>;

export type GameState = Readonly<{
  game: Game
}>;

const initialState: GameState = {
  game: {
    difficulty: {
      name: "NORMAL",
      emoteCount: 200
    },
    emoteIndex: -1,
    score: -1,
    deadline:-1,
    guess: ""
  } 
}

const game = createReducer(initialState.game)
  .handleType(
    ActionTypes.INIT, (state, actions) => {
      return {
        ...state,
        difficulty: actions.payload.difficulty
      }
    }
  )
  .handleType(
    ActionTypes.START, (state, action) => {
      return {
        ...state,
        score: -1
      }
    }
  )
  .handleType(
    ActionTypes.NEXT, (state, actions) => {
      return {
        ...state,
        score: state.score + 1 ,
        guess: "",
        emoteIndex:  _.random(0, state.difficulty.emoteCount - 1)
      }
    }
  )
  .handleType(
    ActionTypes.UPDATE, (state, actions) => {
      return {
        ...state,
        guess : actions.payload.value
      }
    }
  )

export default combineReducers({
  game
});