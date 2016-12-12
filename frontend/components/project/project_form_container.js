import { connect } from 'react-redux';
import { createProject, editProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = ({ projectDetail, session }) => {
  return {
    errors: projectDetail.errors,
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.split("/").pop();
  const formAction = (formType === 'new') ? createProject : editProject;

  return {
    formType,
    processForm: (project) => dispatch(formAction(project))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
