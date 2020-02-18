import React from 'react';
import Main from './Main';
import Form from './Form';
import './App.css';
import styled from 'styled-components';
import Itinerary from './Itinerary';
import Navbar from './Navbar';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Main />
        <Itinerary />
        <Form />
      </Wrapper>
    );
  }
}

export default App;
