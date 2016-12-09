import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import ProjectDetailsReducer from './project_details_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  projectDetail: ProjectDetailsReducer
});

export default rootReducer;
