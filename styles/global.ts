import { createGlobalStyle } from 'styled-components';

// TODO: add rest fonts
const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('fonts/Roboto/Roboto-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  
   @font-face {
     font-family: 'Roboto Bold';
     src: url('fonts/Roboto/Roboto-Black.ttf') format('truetype');
     font-style: normal;
     font-weight: bold;
   }

  @font-face {
    font-family: 'Roboto Italic';
    src: url('fonts/Roboto/Roboto-Italic.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }
`;

export default GlobalStyle;
