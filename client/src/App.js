import React from 'react';
import Main from './components/Main';
import Form from './components/Form';
import Insta from './components/Insta';
import Itinerary from './components/Itinerary';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import Search from './Search';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    guests: '',
    loading: false,
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/guests', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        this.setState = {
          guests: data,
          loading: true,
        };
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <Main />
        <Itinerary />
        <Insta />
        <Gifts />
        <Search />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
