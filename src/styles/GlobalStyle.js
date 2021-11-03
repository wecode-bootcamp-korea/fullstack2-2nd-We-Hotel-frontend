import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }
  font-family: 'Noto Sans', sans-serif !important;
  a {
    color: black;
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: black;
  }
  min-width: 320px;
`;

export default GlobalStyle;
