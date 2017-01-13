import React from 'react';
import { Link } from 'react-router';
import StepForm from '../step/step_form_container';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      intro: "",
      imageFile: null,
      imageUrl: null,
      steps_attributes: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateIntro = this.updateIntro.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateStepImage = this.updateStepImage.bind(this);
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
      intro: this.props.projectDetail.intro,
      imageUrl: this.props.projectDetail.cover_image_url,
      steps_attributes: this.props.projectDetail.steps
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isOwner()) {
      const id = this.props.params.projectId;
      const project = Object.assign({ id }, this.state);

      let formData = new FormData();
      formData.append("project[title]", project.title);
      formData.append("project[intro]", project.intro);
      formData.append("project[id]", project.id);
      project.steps_attributes.forEach((step) => {
        Object.keys(step).forEach((key) => {
          if (key === "imageFile") {
            if (step.imageFile) {
              formData.append("project[steps_attributes][][image]", step.imageFile);
            }
          } else if (key != "imageUrl" && key != "image") {
            formData.append(`project[steps_attributes][][${key}]`, step[key]);
          }
        });
      });
      if (project.imageFile) {
        formData.append("project[cover_image]", project.imageFile);
      }
      this.props.processForm(formData)
        .then((data) => this.props.router
        .push(`/projects/${data.project.id}`));
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

  handleCancel(e) {
    e.preventDefault();
    if (this.props.formType === "edit") {
      this.props.router
        .push(`/projects/${this.props.projectDetail.id}`);
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

  makeCancelBtn() {
    return (
      <button className="btn btn-gray btn-cancel"
        onClick={this.handleCancel}>
        Cancel
      </button>
    )
  }

  displayErrors() {
    const errors = this.props.projectDetail.errors;
    if (!errors || !errors.length > 0) {
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

  updateStep(order, attr) {
    return function(e) {
      const steps_attributes = this.orderSteps().slice();
      steps_attributes[order - 1][attr] = e.currentTarget.value;
      this.setState({
        steps_attributes
      });
    }.bind(this);
  }

  updateStepImage(order) {
    return function(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = function () {
        const steps_attributes = this.orderSteps().slice();
        steps_attributes[order - 1].imageFile = file;
        steps_attributes[order - 1].imageUrl = fileReader.result;
        this.setState({ steps_attributes });
      }.bind(this);

      if(file) {
        fileReader.readAsDataURL(file);
      }
    }.bind(this);
  }

  renderStepImage(order) {
    let imageUrl;
    const step = this.orderSteps()[order - 1];
    if (step.imageUrl) {
      imageUrl = step.imageUrl;
    } else if (step.id) {
      imageUrl = step.image;
    }
    if (imageUrl && imageUrl !== "/images/original/missing.png") {
      return (
        <div className="image-container">
          <img className="intro-image"
            src={imageUrl}/>
        </div>
      );
    } else {
      return (
        <div className="image-container">
          <img className="intro-image"
            src="https://s3.amazonaws.com/constructibles-dev/placeholder.png"/>
        </div>
      )
    }
  }

  renderStepForm(step) {
    return (
      <div className={`step-${step.order}`} key={`step-${step.order}`}>
        <label className="step-label"
          htmlFor={`step-${step.order}-title`}>
          Step {step.order}:
        </label>
        <input type="text"
          className="step-title-input"
          id={`step-${step.order}-title`}
          placeholder="Title"
          value={step.title}
          onChange={this.updateStep(step.order, "title")}>
        </input>
        <label htmlFor={`step-${step.order}-image`}>Step {step.order} Image</label>
        {this.renderStepImage(step.order)}
        <input
          type="file"
          id={`step-${step.order}-image`}
          name={`step ${step.order} image input`}
          className="step-image-input"
          onChange={this.updateStepImage(step.order)}/>
        <textarea className="step-body-input"
          id={`step-${step.order}-body`}
          placeholder="Body"
          value={step.body}
          onChange={this.updateStep(step.order, "body")}>
        </textarea>
      </div>
    );
  }

  renderSteps() {
    return this.orderSteps().map(step => (this.renderStepForm(step)));
  }

  orderSteps() {
    const steps = this.state.steps_attributes;
    const orderedSteps = [];

    while (steps.length > orderedSteps.length) {
      steps.forEach((step) => {
        if (step.order == orderedSteps.length + 1) {
          orderedSteps.push(step);
        }
      });
    }

    return orderedSteps;
  }

  nextStep() {
    const order = this.state.steps_attributes.length + 1;
    return ({
      title: "",
      body:"",
      order,
      imageFile: null,
      imageUrl: null
    })
  }

  handleAddStep(e) {
    e.preventDefault();
    const steps_attributes = this.state.steps_attributes.slice();
    steps_attributes.push(this.nextStep());
    this.setState({
      steps_attributes
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result  });
    }.bind(this);

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  getImageUrl() {
    if (this.state.imageUrl) {
      return this.state.imageUrl;
    } else {
      return "https://s3.amazonaws.com/constructibles-dev/placeholder.png";
    }
  }

  render() {
    return (
      <section className="project-form">
        <div className={`project-form-wrapper ${this.props.formType}`}>
          <header className="project-form-header">
            <h1 className="project-form-title">
              {this.props.formType} Project
            </h1>
            {this.makeCancelBtn()}
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
              <label htmlFor="intro-image">Cover Image</label>
              <div className="image-container">
                <img className="intro-image"
                  src={this.getImageUrl()}/>
              </div>
              <input
                type="file"
                id="intro-image"
                name="cover image"
                className="intro-image-input"
                onChange={this.updateFile}/>
              <label htmlFor="intro">Introduction</label>
              <textarea
                id="intro"
                name="introduction"
                className="project-intro-input"
                placeholder="Introduction"
                value={this.state.intro}
                onChange={this.updateIntro}/>
              {this.renderSteps()}
              {this.displayErrors()}
              <button
                className="btn btn-gray btn-add-step"
                onClick={ this.handleAddStep }>
                Add Step
              </button>
              <button
                className="btn btn-orange"
                onClick={ this.handleSubmit }>
                Publish
              </button>
            </form>
          </section>
        </div>
      </section>
    );
  }

}

export default ProjectForm;
