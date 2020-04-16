import React from 'react';
import Main from './components/Main';
import Insta from './components/Insta';
import Itinerary from './components/Itinerary';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import Form from './components/Form';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      |<Main />
      <Itinerary />
      <Insta />
      <Gifts />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
