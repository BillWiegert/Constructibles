import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: [],
});

export default function sessionReducer(state = _nullUser, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, _nullUser, {currentUser});

    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});

    case CLEAR_ERRORS:
      return Object.assign({}, state, {errors: []});

    default:
      return state;
  }
}
