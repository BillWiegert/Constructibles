import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      order: "",
      projectId: ""
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.step.title,
      body: this.props.step.body,
      order: this.props.step.order,
      projectId: this.props.step.projectId
    })
  }

  render() {
    return (
      <div className={`step-${this.state.order}`}>
        <label className="step-label"
          htmlFor={`step-${this.state.order}-title`}>
          Step 1:
        </label>
        <input type="text"
          className="step-title-input"
          id={`step-${this.state.order}-title`}
          placeholder="Title">
        </input>
        <textarea className="step-body-input"
          id={`step-${this.state.order}-body`}
          placeholder="Body">
        </textarea>
      </div>
    );
  }
}

export default StepForm;
