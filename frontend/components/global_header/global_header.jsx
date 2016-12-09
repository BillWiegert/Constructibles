import React from 'react';
import { Link } from 'react-router';
import Modal from '../modal';
import SessionFormContainer from '../session_form/session_form_container';

class GlobalHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      formType: 'login'
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
  }

  openModal(e = false) {
    if(e) { e.preventDefault(); }
    this.setState({ isModalOpen: true });
  }

  closeModal(e = false) {
    if(e) {e.preventDefault(); }
    this.props.clearErrors();
    this.setState({ isModalOpen: false });
  }

  openLoginModal(e) {
    e.preventDefault();
    this.setState({formType: 'login'});
    this.openModal();
  }

  openSignUpModal(e) {
    e.preventDefault();
    this.setState({formType: 'signup'});
    this.openModal();
  }

  toggleForm(e) {
    e.preventDefault();
    this.props.clearErrors();
    if (this.state.formType === 'login') {
      this.setState({formType: 'signup'});
    } else {
      this.setState({formType: 'login'});
    }
  }

  logoutLink() {
    return (
      <section className="current-user-nav">
        <button
          className="btn-session-link current-user-link"
          >{this.props.currentUser.username}</button>
        <span className="pipe">|</span>
        <button
          className="btn-session-link"
          onClick={this.props.logout}>Log Out</button>
      </section>
    );
  }

  loginLinks() {
    return (
      <nav className="login-nav">
        <button className="btn-session-link" onClick={this.openLoginModal}>Login</button>
        <span className="pipe">|</span>
        <button className="btn-session-link" onClick={this.openSignUpModal}>Sign Up</button>
      </nav>
    );
  };

  sessionLinks() {
    if (this.props.currentUser) {
      return this.logoutLink();
    } else {
      return this.loginLinks();
    }
  }

  sessionModal() {
    return (
      <Modal isOpen={this.state.isModalOpen}
        closeCallback={this.closeModal}
        transitionName="modal-anim"
        addClass="auth-modal"
      >
        <button className="btn-close" onClick={this.closeModal}>X</button>
        <SessionFormContainer
          formType={this.state.formType}
          toggleForm={this.toggleForm}
          closeModal={this.closeModal}
        />
      </Modal>
    );
  }

  render() {
    return (
      <header className="global-header">
        <div className="top-bar">
          <div className="top-bar-nav">
            <Link to="/" className="header-logo"></Link>
            <h2 className="site-title">constructibles</h2>
            {this.sessionLinks()}
          </div>
        </div>
        <div className="bottom-bar">

        </div>
        {this.sessionModal()}
      </header>
    );
  }

}

export default GlobalHeader;
