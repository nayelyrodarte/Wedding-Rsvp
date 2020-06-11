import React from 'react';
import Main from './components/Main';
import Itinerary from './components/Itinerary';
import Form from './components/Form';
import Gifts from './components/Gifts';
import Insta from './components/Insta';
import './App.css';
import Styled from 'styled-components';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Main />
      <Itinerary />
      <Insta />
      <Gifts />
      <Form />
    </div>
  );
};

export default App;
