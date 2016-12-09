import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchAllProjects } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  projects: selectAllProjects(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProjects: () => dispatch(fetchAllProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
