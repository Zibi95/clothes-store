import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 20px 40px;
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}
`;

