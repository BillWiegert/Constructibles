import React from 'react';
import { Link, withRouter } from 'react-router';
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
    this.handlePublish = this.handlePublish.bind(this);
  }

  openModal(e = false) {
    if(e) { e.preventDefault(); }
    this.setState({ isModalOpen: true });
  }

  closeModal(e = false) {
    if(e) { e.preventDefault(); }
    this.props.clearErrors();
    this.setState({ isModalOpen: false });
  }

  openLoginModal(e) {
    if(e) { e.preventDefault(); }
    this.setState({formType: 'login'});
    this.openModal();
  }

  openSignUpModal(e) {
    if(e) { e.preventDefault(); }
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

  handlePublish(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.router.push('/projects/new');
    } else {
      this.openLoginModal();
    }
  }

  logoutLink() {
    return (
      <nav className="current-user-nav">
        <button
          className="btn-session-link current-user-link"
          >{this.props.currentUser.username}</button>
        <span className="pipe">|</span>
        <button
          className="btn-session-link"
          onClick={this.props.logout}>Log Out</button>
      </nav>
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

  searchBar() {
    return (
      <div className="search-bar">
        <form className="header-search-form">
          <label className="header-search-label fun-font">let's make</label>
          <input className="header-search-input" type="text"></input>
          <Link to="/projects" className="material-icons md-light header-search-btn">
            search
          </Link>
        </form>
      </div>
    )
  }

  navButtons() {
    return (
      <nav className="header-nav">
        <Link className="explore btn btn-clear" to="projects">Explore</Link>
        <button className="publish btn btn-clear" onClick={this.handlePublish}>Publish</button>
      </nav>
    );
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
          <div className="top-bar-container">
            <Link to="/" className="header-logo"></Link>
            <div className="top-bar-nav">
              <h2 className="site-title">constructibles</h2>
              {this.searchBar()}
              {this.navButtons()}
            </div>
            <div className="session-nav">
              {this.sessionLinks()}
            </div>
          </div>
        </div>
        <div className="bottom-bar">

        </div>
        {this.sessionModal()}
      </header>
    );
  }

}

export default withRouter(GlobalHeader);
