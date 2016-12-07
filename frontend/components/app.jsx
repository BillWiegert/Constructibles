import React from 'react';
import Modal from 'react-modal';
import GlobalHeaderContainer from './global_header/global_header_container';

const App = ({ children }) => (
  <div className="app">
    <h1>Constructibles</h1>
    <GlobalHeaderContainer />
    { children }
  </div>
);

export default App;
