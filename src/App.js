import React from 'react';
import Main from './components/Main';
import Form from './components/Form';
import Insta from './components/Insta';
import Itinerary from './components/Itinerary';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Itinerary />
        <Insta />
        <Gifts />

        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
