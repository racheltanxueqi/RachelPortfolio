import React from 'react';
import { Container, Box, Typography } from '@material-ui/core/';
import Navbar from './Components/Navbar/index';
import Home from './Home/index';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;