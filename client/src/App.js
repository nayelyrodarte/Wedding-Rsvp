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
  const [error, setError] = useState('');
  const [registeredGuest, setRegisteredGuest] = useState('');
  const [confirmedGuest, setConfirmedGuest] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // state management
  const updateLoading = (boolean) => setLoading(boolean);
  const updateError = (msg) => setError(msg);
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
        updateError('Error en la base de datos');
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
            updateError={updateError}
          />
        ) : (
          <Form
            guestsDatabase={guestsDatabase}
            updateRegisteredGuest={updateRegisteredGuest}
            updateLoading={updateLoading}
            updateError={updateError}
            error={error}
          />
        )}
      </FormLayout>
      <Footer />
    </div>
  );
};

export default App;
