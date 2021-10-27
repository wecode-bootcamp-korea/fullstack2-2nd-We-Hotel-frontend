import React from 'react';
import ReactDOM from 'react-dom';
import initMockAPI from './mocks';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

ReactDOM.render(
  <>
    <Router />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
