import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  h2 {
    font-size: 2.2em;
    color: #ffd801;
    margin: 20px 0;
    ${(props) =>
      props.isDesktop &&
      `
      font-size: 6em;
    `}
  }

  p {
    line-height: 1.6em;
    ${(props) =>
      props.isDesktop &&
      `
      font-size: 1.2em;
      line-height: 1.8em;
    `}
  }
`;
