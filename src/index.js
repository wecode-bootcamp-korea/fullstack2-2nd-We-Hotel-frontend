import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/pakStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
);
