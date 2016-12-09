import React from 'react';
import Modal from 'react-modal';
import GlobalHeaderContainer from './global_header/global_header_container';
import ProjectIndexContainer from './project/project_index_container';

const App = ({ children }) => (
  <div className="app">
    <GlobalHeaderContainer />
    { children }
  </div>
);

export default App;
