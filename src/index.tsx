import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
