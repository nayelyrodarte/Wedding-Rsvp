import React, { useState } from 'react';

import Main from './Main';
import Itinerary from './Itinerary';
import FormLayout from './FormLayout';
import Form from './Form';
import CheckboxForGuests from './CheckboxForGuests';
import Gifts from './Gifts';
import Insta from './Insta';
import Footer from './Footer';
import Message from './Message';
import Modal from './Modal';

import '../css/screen.css';
import '../css/mobile.css';

const App = () => {
  const [notification, setNotification] = useState('');
  const [registeredGuest, setRegisteredGuest] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // state management
  const updateLoading = (boolean) => {
    if (boolean === true) {
      setNotification(<Message type='charging' />);
    } else {
      setNotification('');
    }
  };

  const updateNotification = (msg) => setNotification(msg);
  const updateRegisteredGuest = (registeredGuest) =>
    setRegisteredGuest(registeredGuest);
  const isModalOpen = (boolean) => setOpenModal(boolean);

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
            updateNotification={updateNotification}
          />
        ) : (
          <Form
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
