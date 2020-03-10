import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

body {
  font-family: 'EB Garamond';
  margin: 0;

  h1, h2, h3 {
    font-family: 'Parisienne';
  }

  h1 {
      font-size: 2.8em;
  }

  h2 {
      font-size: 2em;
  }

  h3 {
      font-size: 1.5em;
  }

  p {
      font-size: 1.2em;
  }

  text-align: center;
  }

button {
  font-size: inherit;
  color: white;
  background: black;
  font-family: inherit;
  margin: 1em;
  padding: 0.25em 2em;
  border: none;
  border-radius: 12px;
  outline: none;
  width: auto;
}

input {
  font-size: 1.1em;
  font-family: inherit;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  padding: 0.2em 3em;
  margin: 1em;
  outline: none;
}
}
`;

export default Styles;
