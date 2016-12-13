import React from 'react';
import { Link } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      intro: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateIntro = this.updateIntro.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.props.clearProjectErrors();
    if (this.props.formType === "edit") {
      this.props.fetchSingleProject(this.props.params.projectId)
      .then(this.updateState);
    }
  }

  updateState() {
    this.setState ({
      title: this.props.projectDetail.title,
      intro: this.props.projectDetail.intro
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isOwner()) {
      const user_id = this.props.currentUser.id;
      const id = this.props.params.projectId;
      const project = Object.assign({ user_id, id }, this.state);
      this.props.processForm(project)
      .then((data) => this.props.router.push(`/projects/${data.project.id}`));
    } else {
      this.props.router.push(`/project/${data.project.id}`);
    }
  }

  isOwner() {
    if (this.props.formType === "new" ||
      this.props.currentUser.id === this.props.projectDetail.user.id) {
      return true;
    } else {
      return false;
    }
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  updateIntro(e) {
    this.setState({ intro: e.currentTarget.value })
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.isOwner()) {
      this.props.deleteProject(this.props.projectDetail.id)
        .then(() => this.props.router.push("/"));
    } else {
      this.props.router.push("/");
    }
  }

  makeDeleteBtn() {
    if (this.props.formType === "edit") {
      return (
        <button className="btn btn-delete btn-red"
          onClick={this.handleDelete}>
          Delete
        </button>
      );
    } else {
      return null;
    }
  }

  displayErrors() {
    const errors = this.props.projectDetail.errors;
    if (!errors.length > 0) {
      return
    }
    return (
      <div className="project-error-wrapper clearfix">
        <ul className="project-errors">
          {errors.map((err, idx) => (
            <li key={idx}>
              {err}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="project-form">
        <div className={`project-form-wrapper ${this.props.formType}`}>
          <header className="project-form-header">
            <h1 className="project-form-title">{this.props.formType} Project</h1>
            {this.makeDeleteBtn()}
          </header>
          <section className="project-form-body">
            <form className="project-form-content"
              onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="project-title-input"
                placeholder="Title"
                value={this.state.title}
                onChange={this.updateTitle}/>
              <label htmlFor="intro">Introduction</label>
              <textarea
                id="intro"
                name="intro"
                className="project-intro-input"
                placeholder="Introduction"
                value={this.state.intro}
                onChange={this.updateIntro}/>
              {this.displayErrors()}
              <button className="btn btn-orange" onClick={ this.handleSubmit }>
                Publish
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }

}

export default ProjectForm;
