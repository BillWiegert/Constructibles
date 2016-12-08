import { connect } from 'react-redux';
import GlobalHeader from './global_header';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalHeader);
