import React from 'react';
import Main from './components/Main';
import Itinerary from './components/Itinerary';
import Form from './components/Form';
import Gifts from './components/Gifts';
import Insta from './components/Insta';
import Footer from './components/Footer';
import './css/screen.css';
import './css/mobile.css';

const App = () => {
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
};

export default App;
