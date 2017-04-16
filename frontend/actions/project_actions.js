import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_PROJECT_ERRORS = "CLEAR_PROJECT_ERRORS";

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

export const receiveProjectErrors = (errors) => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const clearProjectErrors = () => {
  return {
    type: CLEAR_PROJECT_ERRORS
  }
}

export const fetchAllProjects = (filter) => {
  return (dispatch) => {
    return APIUtil.fetchAllProjects(filter)
    .then((projects) => dispatch(receiveProjects(projects)));
  };
};

export const fetchSingleProject = (id) => {
  return (dispatch) => {
    return APIUtil.fetchSingleProject(id)
    .then((project) => dispatch(receiveProject(project)));
  };
};

export const createProject = (project) => {
  return (dispatch) => {
    return APIUtil.createProject(project)
    .then((project) => dispatch(receiveProject(project)),
      (err) => dispatch(receiveProjectErrors(err.responseJSON))
    );
  };
};

export const editProject = (project) => {
  return (dispatch) => {
    return APIUtil.editProject(project)
    .then((project) => dispatch(receiveProject(project)),
      (err) => dispatch(receiveProjectErrors(err.responseJSON))
    );
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    return APIUtil.deleteProject(id)
  };
};
