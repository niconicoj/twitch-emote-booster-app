import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';
import { Status } from './models';
import { ActionTypes } from './constants';

export type StatusAction = ActionType<typeof actions>;

export type StatusState = Readonly<{
  status: Status
}>;

const initialState: StatusState = {
  status: "HOME"
}

const status = createReducer(initialState.status)
  .handleType(
    ActionTypes.CHANGE, (_state, action) => action.payload.newStatus
  );

export default combineReducers({
  status
});