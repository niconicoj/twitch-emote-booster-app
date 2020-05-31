import Types from 'MyTypes';
import { connect } from 'react-redux';

import { gameActions } from '../redux/game';
import { gameSelectors } from '../redux/game';
import {emotesSelectors } from '../redux/emotes';

import Game from '../components/Game';

const mapStateToProps = ( state: Types.RootState ) => ({
  emotes : emotesSelectors.getEmotes(state.emotes),
  game: gameSelectors.getGameState(state.game)
})

const dispatchProps = {
  guess: gameActions.guess,
  update: gameActions.update
}


const GameContainer = connect(
  mapStateToProps,
  dispatchProps
)(Game);

export default GameContainer;