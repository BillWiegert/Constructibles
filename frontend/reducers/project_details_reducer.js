import { RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS, CLEAR_PROJECT_ERRORS } from '../actions/project_actions';

const _defaultProject = {
  title: "",
  info: "",
  user: {
    username: ""
  },
  errors: [],
};

export default function projectReducer(state = _defaultProject, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return Object.assign({}, _defaultProject, action.project);
    case RECEIVE_PROJECT_ERRORS:
      return Object.assign({}, _defaultProject, {errors: action.errors});
    case CLEAR_PROJECT_ERRORS:
      return Object.assign({}, _defaultProject, {errors: []});
    default:
      return state;
  }
}
