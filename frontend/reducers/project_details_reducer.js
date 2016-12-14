import { RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS, CLEAR_PROJECT_ERRORS } from '../actions/project_actions';

const _defaultProject = {
  title: "",
  info: "",
  user: {
    username: ""
  },
  errors: [],
  steps: []
};

export default function projectReducer(state = _defaultProject, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return Object.assign({}, state, action.project);
    case RECEIVE_PROJECT_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case CLEAR_PROJECT_ERRORS:
      return Object.assign({}, state, {errors: []});
    default:
      return state;
  }
}
