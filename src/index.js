import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <>
    <Router />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
