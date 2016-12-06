import React from 'react';
import { Link } from 'react-router';

const welcome = (currentUser, logout) => {
  return (
    <section className="current-user-nav">
      <a className="current-user-link">Logged in as {currentUser.username}</a>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </section>
  );
};

const links = () => {
  return (
    <nav className="login-nav">
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </nav>
  );
};

const GlobalHeader = ({ currentUser, logout }) => {
  if (currentUser) {
    return welcome(currentUser, logout);
  } else {
    return links();
  }
};

export default GlobalHeader;
