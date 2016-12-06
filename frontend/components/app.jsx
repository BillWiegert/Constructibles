import React from 'react';
import GlobalHeaderContainer from './global_header/global_header_container';

const App = ({ children }) => (
  <div>
    <h1>Constructibles</h1>
    <GlobalHeaderContainer />
    { children }
  </div>
);

export default App;
