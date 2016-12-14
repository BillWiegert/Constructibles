import * as APIUtil from '../util/step_api_util';

export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_STEP_ERRORS = "RECEIVE_STEP_ERRORS";
export const CLEAR_STEP_ERRORS = "CLEAR_STEP_ERRORS";

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

export const receiveStepErrors = (errors) => {
  return {
    type: RECEIVE_STEP_ERRORS,
    errors
  };
};

export const clearStepErrors = () => {
  return {
    type: CLEAR_STEP_ERRORS
  };
};

export const fetchStep = (id) => {
  return (dispatch) => {
    return APIUtil.fetchStep(id)
    .then((step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveStepErrors(err.responseJSON))
    );
  };
};

export const createStep = (step) => {
  return (dispatch) => {
    return APIUtil.createStep(step)
    .then((step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveStepErrors(err.responseJSON))
    );
  };
};

export const createStep = (step) => {
  return (dispatch) => {
    return APIUtil.createStep(step)
    .then((step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveStepErrors(err.responseJSON))
    );
  };
};

export const deleteStep = (id) => {
  return (dispatch) => {
    return APIUtil.deleteStep(id)
  };
};
