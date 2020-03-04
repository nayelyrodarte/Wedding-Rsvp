import React from 'react';
import Main from './Main';
import Form from './Form';
import './App.css';
import Insta from './Insta';
import styled from 'styled-components';
import Itinerary from './Itinerary';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Main />

        <Itinerary />
        <Insta />
        <Form />
      </Wrapper>
    );
  }
}

export default App;
