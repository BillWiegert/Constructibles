import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  // componentDidUpdate() {
  //   this.redirectOnLogin();
  // }
  //
  // redirectOnLogin() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push("/");
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  oppositeLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  displayErrors() {
    if (!this.props.errors) {
      return
    }
    return (
      <ul className="auth-errors">
        {this.props.errors.map((err, idx) => (
          <li key={idx}>
            {error}
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
    return (
      <form onSubmit={this.handleSubmit} className="AuthForm">
        <h3>{this.props.formType}</h3>
        {this.displayErrors()}

        <label>Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.updateUsername}
          />
        </label>

        <label>Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
        </label>
        <button className="btn-submit" type="submit">{this.props.formType}</button>
        {this.oppositeLink()}
      </form>
    );
  }
}

export default SessionForm;
