import React from 'react';

class ProjectDetails extends React.Component {

  componentDidMount() {
    this.props.fetchSingleProject(this.props.params.projectId);
  }

  render() {
    const project = this.props.projectDetail;
    return (
      <section className="project-details">
        <h1>Project Details</h1>
        <span className="project-title">
          {project.title}
        </span>
        <span className="project-intro">
          {project.intro}
        </span>
        <span className="project-user-username">
          {project.user.username}
        </span>
      </section>
    );
  }
}

export default ProjectDetails;
