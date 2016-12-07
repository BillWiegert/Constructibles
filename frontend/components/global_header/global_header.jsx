import React from 'react';
import { Link } from 'react-router';
import Modal from '../modal';
import SessionFormContainer from '../session_form/session_form_container';

class GlobalHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal(e) {
    e.preventDefault();
    this.setState({ isModalOpen: true });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ isModalOpen: false });
  }

  welcome() {
    return (
      <section className="current-user-nav">
        <a
          className="current-user-link"
          >Logged in as {this.props.currentUser.username}</a>
        <button
          className="logout-button"
          onClick={this.props.logout}>Log Out</button>
      </section>
    );
  }

  loginLinks() {
    return (
      <nav className="login-nav">
        <a href="#" id="login" onClick={this.openModal}>Login</a>
        <Modal isOpen={this.state.isModalOpen}
          closeCallback={this.closeModal}
          transitionName="modal-anim"
          addClass="auth-modal"
        >
          <button className="btn-close" onClick={this.closeModal}>X</button>
          <SessionFormContainer formType={'login'} />
        </Modal>
      </nav>
    );
  };

  render() {
    if (this.props.currentUser) {
      return this.welcome();
    } else {
      return this.loginLinks();
    }
  };

}

export default GlobalHeader;
