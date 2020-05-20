import React from 'react';
import Main from './components/Main';
import Itinerary from './components/Itinerary';
import Gifts from './components/Gifts';
import Rsvp from './components/Rsvp';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Main />
      <Itinerary />
      <Gifts />
      <Rsvp />
    </div>
  );
};

export default App;
