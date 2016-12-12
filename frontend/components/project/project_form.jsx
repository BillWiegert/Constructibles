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

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={`project-form ${this.props.formType}`}>
        <h3 className="project-form-title">{this.props.formType} Project</h3>
        <input
          type="text"
          className="project-title-input"
          placeholder="Title"
          onChange={this.updateTitle}/>
        <input
          type="text"
          className="project-intro-input"
          placeholder="Introduction"
          onChange={this.updateIntro}/>
        <button onClick={ this.handleSubmit }>Submit</button>
      </form>
    );
  }

}

export default ProjectForm;
