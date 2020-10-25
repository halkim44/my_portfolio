import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  body {
    margin: 0;
    color: #fffcf7;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    font-family: 'Poppins', sans-serif;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  h2 {
    font-size: 1.875em;
    color: #ffd801;
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  input, textarea {
    background: none;
    border: none;
    outline: none;
  }
  p {
    font-size: 0.9em;
    color: #888;
  }
`;
