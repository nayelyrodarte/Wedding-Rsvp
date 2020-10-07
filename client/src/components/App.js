import React, { useState } from 'react';

import Main from './Main';
import Itinerary from './Itinerary';
import FormLayout from './FormLayout';
import Form from './Form';
import CheckboxForGuests from './CheckboxForGuests';
import Gifts from './Gifts';
import Insta from './Insta';
import Footer from './Footer';
import Modal from './Modal';

import '../css/screen.css';
import '../css/mobile.css';

const App = () => {
  const [notification, setNotification] = useState('');
  const [registeredGuest, setRegisteredGuest] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Main />
      <Itinerary />
      <Insta />
      <Gifts isModalOpen={setOpenModal} />
      {openModal && <Modal isModalOpen={setOpenModal} />}
      <FormLayout>
        {registeredGuest ? (
          <CheckboxForGuests
            registeredGuest={registeredGuest}
            guestPhone={guestPhone}
            updateNotification={setNotification}
          />
        ) : (
          <Form
            updateRegisteredGuest={setRegisteredGuest}
            updateNotification={setNotification}
            guestPhone={guestPhone}
            updateGuestPhone={setGuestPhone}
            notification={notification}
          />
        )}
      </FormLayout>
      <Footer />
    </div>
  );
};

export default App;
