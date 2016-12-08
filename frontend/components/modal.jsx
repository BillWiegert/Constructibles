import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Modal = ({ isOpen, closeCallback, transitionName, addClass, children }) => {
  if(isOpen) {
    return (
        <ReactCSSTransitionGroup
          transitionName={transitionName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <section className={`modal ${addClass}`}>
            { children }
          </section>
          <div className="modal-backdrop" onClick={closeCallback}></div>
        </ReactCSSTransitionGroup>
    );
  } else {
    // return <ReactCSSTransitionGroup transitionName={ transitionName } />;
    return null;
  }
}

export default Modal;
