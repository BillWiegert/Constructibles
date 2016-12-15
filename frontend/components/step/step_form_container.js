import { connect } from 'react-redux';
import StepForm from './step_form';

const mapStateToProps = ({ projectDetail }, { stepNum }) => {
  return {
    projectId: projectDetail.id,
    step: projectDetail.steps[stepNum - 1]
  };
};

const mapDispatchToProps = (dispatch) => {
}

export default connect(
  mapStateToProps
)(StepForm);
