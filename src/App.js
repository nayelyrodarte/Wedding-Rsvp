import React from 'react';
import Main from './Main';
import Form from './Form';
import './App.css';
import Insta from './Insta';
import Itinerary from './Itinerary';
import Gifts from './Gifts';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Itinerary />
        <Gifts />
        <Insta />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
