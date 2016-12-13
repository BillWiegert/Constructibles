import { connect } from 'react-redux';
import { createProject, editProject, fetchSingleProject } from '../../actions/project_actions';
import ProjectForm from './project_form';


const mapStateToProps = ({ projectDetail, session }) => {
  return {
    projectDetail,
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.split("/").pop();
  const formAction = (formType === 'new') ? createProject : editProject;

  return {
    formType,
    processForm: (project) => dispatch(formAction(project)),
    fetchSingleProject: (id) => dispatch(fetchSingleProject(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
