import { EmotesState } from './reducers';
import _ from 'lodash';

export const getRandomEmote = (state: EmotesState) => _.sample(state.emotes)
export const getEmotes = (state: EmotesState ) => state.emotes