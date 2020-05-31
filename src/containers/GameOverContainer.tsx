import Types from 'MyTypes';
import { connect } from 'react-redux';

import { gameSelectors, gameActions } from '../redux/game';

import GameOver from '../components/GameOver';
import { statusActions } from '../redux/status';

const mapStateToProps = ( state: Types.RootState ) => ({
  game: gameSelectors.getGameState(state.game)
})

const dispatchProps = {
  start: gameActions.start,
  change: statusActions.change
}

const GameOverContainer = connect(
  mapStateToProps,
  dispatchProps
)(GameOver);

export default GameOverContainer;