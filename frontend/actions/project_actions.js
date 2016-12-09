import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

export const receiveProjects = (projects) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
}

export const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  }
}

export const fetchAllProjects = () => {
  return (dispatch) => {
    return APIUtil.fetchAllProjects()
    .then((projects) => dispatch(receiveProjects(projects)));
  };
};

export const fetchSingleProject = (id) => {
  return (dispatch) => {
    return APIUtil.fetchSingleProject(id)
    .then((project) => dispatch(receiveProject(project)));
  };
};
