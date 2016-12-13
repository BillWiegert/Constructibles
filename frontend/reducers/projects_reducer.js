import { RECEIVE_PROJECTS } from '../actions/project_actions';

// const defaultState = Object.freeze({
//   index: {},
//   order: []
// })

const defaultState = Object.freeze({});

export default function projectsReducer(state = defaultState, action) {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_PROJECTS:
      return Object.assign({}, defaultState, action.projects);

    default:
      return state;
  }
}
