import { combineReducers } from 'redux';

import { emotesReducer } from './emotes';
import { statusReducer } from './status';
import { gameReducer } from './game';

const rootReducer = () => combineReducers({
  emotes: emotesReducer,
  status: statusReducer,
  game: gameReducer
});

export default rootReducer;