import { RECEIVE_PROJECT } from '../actions/project_actions';

const _defaultProject = {
  title: "",
  info: "",
  user: {
    username: ""
  }
};

export default function projectReducer(state = _defaultProject, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return Object.assign({}, _defaultProject, action.project);

    default:
      return state;
  }
}
