import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: this.props.formType
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    // this.guestLogin = this.props.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  oppositeLink() {
    if (this.props.formType === "login") {
      return <button
        className="btn-session-link"
        onClick={this.props.toggleForm}>Sign Up »</button>;
    } else {
      return <button
        className="btn-session-link"
        onClick={this.props.toggleForm}>Login »</button>;
    }
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.guestLogin().then(() => this.props.closeModal());
  }

  guestLoginButton() {
    return (
      <button
        className="btn-session-link btn-guest-login"
        onClick={this.handleGuestLogin}>Login as Guest »</button>
    );
  }

  displayErrors() {
    if (!this.props.errors.length > 0) {
      return
    }
    return (
      <ul className="auth-errors">
        {this.props.errors.map((err, idx) => (
          <li key={idx}>
            {err}
          </li>
        ))}
      </ul>
    );
  }

  updateUsername(e) {
    this.setState({ username: e.currentTarget.value});
  }

  updatePassword(e) {
    this.setState({password: e.currentTarget.value});
  }

  render() {
    let actionName = this.props.formType;
    if (actionName === 'signup') {
      actionName = "sign up";
    }

    return (
      <form onSubmit={this.handleSubmit} className="auth-form">
        <header className="auth-form-header">
          <h3>{actionName}</h3>
        </header>
        <div className="auth-form-content">


          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.updateUsername}
          />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.updatePassword}
          />

        {this.displayErrors()}
        <button className={`btn-submit btn-${this.props.formType}`} type="submit">{actionName}</button>
        </div>
        <footer className="auth-form-footer">
          {this.oppositeLink()}
          {this.guestLoginButton()}
        </footer>
      </form>
    );
  }
}

export default SessionForm;
