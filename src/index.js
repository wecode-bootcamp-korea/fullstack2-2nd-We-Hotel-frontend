import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';

ReactDOM.render(
  <GlobalStyle>
    <Reset />
    <Router />
  </GlobalStyle>,
  document.getElementById('root')
);
