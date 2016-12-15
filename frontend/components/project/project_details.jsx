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

  renderStepImage(step) {
    if (step.image_url == "/images/original/missing.png") {
      return null;
    } else {
      return (
        <div className="image-container">
          <img src={step.image_url}
            className="step-image"/>
        </div>
      );
    }
  }


  renderSteps() {
    const steps = this.props.projectDetail.steps;
    if (!steps || steps.length === 0) {
      return null;
    }

    return (
      <div className="steps">
        {steps.map((step) => (
          <div key={`step-${step.order}`}
            className={`step-${step.order} step-container`}>
            <h2 className="step-title">
              {`Step ${step.order}: ${step.title}`}
            </h2>
            <div className="step-body">
              {this.renderStepImage(step)}
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const project = this.props.projectDetail;
    return (
      <section className="project-details">
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
            <div className="intro-container">
              <div className="image-container">
                <img src={project.cover_image_url}
                  className="intro-image"/>
              </div>
              <p className="project-intro">
                {project.intro}
              </p>
            </div>
            {this.renderSteps()}
          </section>
        </div>
      </section>
    );
  }
}

export default withRouter(ProjectDetails);
