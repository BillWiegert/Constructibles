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
    this.updateIntro = this.updateIntro.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleProject(this.props.params.projectId)
    .then(this.updateState);
  }

  updateState() {
    this.setState ({
      title: this.props.projectDetail.title,
      intro: this.props.projectDetail.intro
    });
  }

 handleSubmit(e) {
   e.preventDefault();
   const user_id = this.props.currentUser.id;
   const id = this.props.params.projectId;
   const project = Object.assign({ user_id, id }, this.state);
   this.props.processForm(project)
    .then((data) => this.props.router.push(`/projects/${data.project.id}`));
 }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  updateIntro(e) {
    this.setState({ intro: e.currentTarget.value })
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
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="project-title-input"
                placeholder="Title"
                value={this.state.title}
                onChange={this.updateTitle}/>
              <label for="intro">Introduction</label>
              <textarea
                id="intro"
                name="intro"
                className="project-intro-input"
                placeholder="Introduction"
                value={this.state.intro}
                onChange={this.updateIntro}/>
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
