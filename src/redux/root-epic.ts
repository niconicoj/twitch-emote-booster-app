import { combineEpics } from 'redux-observable';

import * as emotesEpics from './emotes/epics';
import * as gameEpics from './game/epics';

export default combineEpics(
  ...Object.values(emotesEpics),
  ...Object.values(gameEpics)
);
