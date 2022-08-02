import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *::before,
  *,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  input,
  button, 
  textarea,
  select {
    font: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-size: ${({ theme }) => theme.fonts?.size?.base};
    font-family: ${({ theme }) => theme.fonts?.family?.sans};

    color: ${({ theme }) => theme.colors.gray[800]};
    background-color: ${({ theme }) => theme.colors.background.background};
    scroll-behavior: smooth;
  }
`;
