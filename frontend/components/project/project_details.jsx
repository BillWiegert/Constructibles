import React from 'react';
import { withRouter } from 'react-router';

class ProjectDetails extends React.Component {

  componentDidMount() {
    this.props.fetchSingleProject(this.props.params.projectId);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.router.push(`/projects/${this.props.params.projectId}/edit`);
  }

  editButton() {
    if (this.props.currentUser &&
      this.props.currentUser.id === this.props.projectDetail.user.id) {
      return (
        <button className="btn edit-btn" onClick={this.handleEdit.bind(this)}>
          Edit
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    const project = this.props.projectDetail;
    return (
      <div className="project-details">
        <div className="project-wrapper">
          <header className="project-details-header">
            <h1 className="project-title">
              {project.title}
            </h1>
            <span className="author"> by {project.user.username}
            </span>
            {this.editButton()}
          </header>
          <section className="project-body">
            <p className="project-intro">
              {project.intro}
            </p>
            <h2 className="step-title">
              Step 1: The first step
            </h2>
            <p className="step-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="step-title">
              Step 2: The first step
            </h2>
            <p className="step-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetails);
