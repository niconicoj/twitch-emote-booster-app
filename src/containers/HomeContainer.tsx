import Types from 'MyTypes';
import { connect } from 'react-redux';

import { gameActions } from '../redux/game';

import Home from '../components/Home';

const mapStateToProps = ( state: Types.RootState ) => ({})

const dispatchProps = {
  init: gameActions.init
}


const HomeContainer = connect(
  mapStateToProps,
  dispatchProps
)(Home);

export default HomeContainer;