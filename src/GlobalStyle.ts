
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle= createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };

  body {
    background-color: #eee;
    margin: 0 2rem;
  };
`
