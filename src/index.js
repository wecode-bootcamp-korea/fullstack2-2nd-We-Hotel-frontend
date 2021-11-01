import React from 'react';
import ReactDOM from 'react-dom';
import initMockAPI from '../src/mocks';
import { ThemeProvider } from 'styled-components';
import ModalContext from './Contexts/ModalContext';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/pakStyles';
import CalendarContext from './Contexts/CalendarContext/CalendarContext';

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    return initMockAPI();
  }

  return Promise.resolve();
}

prepare().then(() => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CalendarContext>
        <ModalContext>
          <Router />
        </ModalContext>
      </CalendarContext>
      <GlobalStyle />
    </ThemeProvider>,
    document.getElementById('root')
  );
});
