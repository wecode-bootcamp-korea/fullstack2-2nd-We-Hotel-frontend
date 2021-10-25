import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import './styles/reset.css';
import './styles/common.css';
import './styles/color.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
