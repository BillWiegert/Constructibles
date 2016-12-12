import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: !!session.currentUser,
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { formType }) => {
  const formAction = (formType === 'login') ? login : signup;
  const guest = { username: "Guest", password: "password" };
  return {
    formType,
    processForm: (user) => dispatch(formAction(user)),
    guestLogin: () => dispatch(login(guest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
