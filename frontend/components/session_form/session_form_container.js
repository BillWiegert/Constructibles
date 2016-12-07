import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: !!state.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, { formType }) => {
  const formAction = (formType === 'login') ? login : signup;

  return {
    formType,
    processForm: (user) => dispatch(formAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
