import React from 'react';
import Main from './components/Main';
import Itinerary from './components/Itinerary';
import Form from './components/Form';
import Gifts from './components/Gifts';
import Insta from './components/Insta';
import './App.css';

//TODO
// Add footer

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
