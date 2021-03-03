import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes/Routes'

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <Routes />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);