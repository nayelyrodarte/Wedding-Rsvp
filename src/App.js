import React from 'react';
import Main from './Main';
import Form from './Form';
import './App.css';
import Insta from './Insta';
import Itinerary from './Itinerary';
import Styles from './Styles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Styles />
        <Main />
        <Itinerary />
        <Insta />
        <Form />
      </div>
    );
  }
}

export default App;
