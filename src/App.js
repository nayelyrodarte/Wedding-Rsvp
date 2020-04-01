import React from 'react';
import Main from './components/Main';
import Form from './components/Form';
import Insta from './components/Insta';
import Itinerary from './components/Itinerary';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    fullName: null,
    guests: null,
    loading: false
  };

  getGuests = async ({ name, lastName }) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://localhost:5000/api/guests`);

    this.setState({
      guests: res.data
    });
  };

  render() {
    return (
      <div>
        <Main />
        <Itinerary />
        <Insta />
        <Gifts />
        <Form />
        <Search searchGuests={this.getGuests} />
        <Footer />
      </div>
    );
  }
}

export default App;
