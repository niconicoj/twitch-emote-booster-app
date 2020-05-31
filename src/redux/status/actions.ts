import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { Status } from './models';

export const change = (newStatus: Status) => action(ActionTypes.CHANGE, {newStatus: newStatus});