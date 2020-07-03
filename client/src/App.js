import React from 'react';
import Main from './components/Main';
import Itinerary from './components/Itinerary';
import Form from './components/Form';
import Gifts from './components/Gifts';
import Insta from './components/Insta';
import Modal from './components/Modal';
import './screen.css';
import './mobile.css';

//TODO
// Add footer

const App = () => {
  return (
    <div>
      <Modal />
      <Main />
      <Itinerary />
      <Insta />
      <Gifts />
      <Form />
    </div>
  );
};

export default App;
