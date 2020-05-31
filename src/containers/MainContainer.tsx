import Types from 'MyTypes';
import { connect } from 'react-redux';

import { statusSelectors } from '../redux/status';

import Main from '../components/Main'

const mapStateToProps = ( state: Types.RootState ) => ({
  status: statusSelectors.getStatus(state.status)
})

const dispatchProps = {}

const MainContainer = connect(
  mapStateToProps,
  dispatchProps
)(Main);

export default MainContainer;