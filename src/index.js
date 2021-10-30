import React from 'react';
import ReactDOM from 'react-dom';
import initMockAPI from '../src/mocks';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/pakStyles';
import { ThemeProvider } from 'styled-components';

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    return initMockAPI();
  }

  return Promise.resolve();
}

prepare().then(() => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>,
    document.getElementById('root')
  );
});
