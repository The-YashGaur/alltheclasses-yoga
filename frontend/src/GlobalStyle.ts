import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
