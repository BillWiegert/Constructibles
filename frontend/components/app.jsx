import React from 'react';
import Modal from 'react-modal';
import GlobalHeaderContainer from './global_header/global_header_container';
import ProjectIndexContainer from './project/project_index_container';
import GlobalFooter from './global_footer/global_footer';

const App = ({ children }) => (
  <div className="app">
    <GlobalHeaderContainer />
    { children }
    <GlobalFooter/>
  </div>
);

export default App;
