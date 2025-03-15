import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset CSS básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%; /* Garante que o body ocupe 100% da altura da viewport */
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    line-height: 1;
    /* Removi as cores de fundo e texto daqui */
    font-family: sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default GlobalStyles;





















































