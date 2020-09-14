import React, { useState, useEffect } from 'react';
import { rest } from './functions';

import Main from './components/Main';
import Itinerary from './components/Itinerary';
import FormLayout from './components/FormLayout';
import Form from './components/Form';
import CheckboxForGuests from './components/CheckboxForGuests';
import Gifts from './components/Gifts';
import Insta from './components/Insta';
import Footer from './components/Footer';
import Message from './components/Message';
import Modal from './components/Modal';

import './css/screen.css';
import './css/mobile.css';

const App = () => {
  const [guestsDatabase, setGuestsDatabase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [registeredGuest, setRegisteredGuest] = useState('');
  const [confirmedGuest, setConfirmedGuest] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // state management
  const updateLoading = (boolean) => {
    if (boolean === true) {
      setNotification(<Message msg='Cargando...' type='charging' />);
    } else {
      setNotification('');
    }
    setLoading(boolean);
  };

  const updateNotification = (msg) => setNotification(msg);
  const updateRegisteredGuest = (registeredGuest) =>
    setRegisteredGuest(registeredGuest);
  const updateConfirmedGuest = (boolean) => setConfirmedGuest(boolean);
  const isModalOpen = (boolean) => setOpenModal(boolean);

  useEffect(() => {
    updateLoading(true);
    rest
      .getGuests()
      .then((res) => res.json())
      .then((res) => {
        setGuestsDatabase(res);
        updateLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        updateLoading(false);
        setNotification(
          <Message msg={'Error en la base de datos'} type='error' />
        );
      });
  }, []);

  return (
    <div>
      <Main />
      <Itinerary />
      <Insta />
      <Gifts isModalOpen={isModalOpen}>
        <Modal />
      </Gifts>
      <FormLayout>
        {registeredGuest ? (
          <CheckboxForGuests
            registeredGuest={registeredGuest}
            confirmedGuest={confirmedGuest}
            updateConfirmedGuest={updateConfirmedGuest}
            updateLoading={updateLoading}
            updateNotification={updateNotification}
          />
        ) : (
          <Form
            guestsDatabase={guestsDatabase}
            updateRegisteredGuest={updateRegisteredGuest}
            updateLoading={updateLoading}
            updateNotification={updateNotification}
            notification={notification}
          />
        )}
      </FormLayout>
      <Footer />
    </div>
  );
};

export default App;
