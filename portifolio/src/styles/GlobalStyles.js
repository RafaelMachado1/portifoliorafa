import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset CSS básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "#fff")};
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#333")};
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
