import React from 'react';
import Main from './Main';
import Form from './Form';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Main />
        <Form />
      </Wrapper>
    );
  }
}

export default App;
