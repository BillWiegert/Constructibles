import { connect } from 'react-redux';
import ProjectDetails from './project_details';
import { fetchSingleProject } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  projectDetail: state.projectDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProject: (id) => dispatch(fetchSingleProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
