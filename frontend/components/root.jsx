import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './project/project_index_container';
import ProjectDetailsContainer from './project/project_details_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ ProjectIndexContainer } />
          <Route path="projects" component={ ProjectIndexContainer }>
          </Route>
          <Route path="projects/:projectId" component={ ProjectDetailsContainer }>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
