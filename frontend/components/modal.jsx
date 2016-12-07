import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Modal = ({ isOpen, closeCallback, transitionName, children }) => {
  if(isOpen) {
    return (
      // <container className="modal-container">
        <ReactCSSTransitionGroup transitionName={transitionName}>
          <section className="modal">
            { children }
          </section>
          <div className="modal-backdrop" onClick={closeCallback}></div>
        </ReactCSSTransitionGroup>
      // </container>
    );
  } else {
    // return <ReactCSSTransitionGroup transitionName={ transitionName } />;
    return null;
  }
}

export default Modal;
