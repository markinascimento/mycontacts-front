import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-size: 16px;
    font-family: 'Sora', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.gray[800]};
    background: ${({ theme }) => theme.backgound};
  }

  button {
    font-size: 16px;
    font-family: 'Sora', sans-serif;
    font-weight: 500;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  input, select {
    font-size: 16px;
    font-family: 'Sora', sans-serif;
    font-weight: 500;
    border: 0;
    outline: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.gray[800]};
  }
`;
