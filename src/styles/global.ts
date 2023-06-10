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
    font-size: 1rem;
    font-family: 'Sora', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.gray};
    background: ${({ theme }) => theme.backgound};
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  input {
    border: 0;
    outline: 0;
  }
`;
