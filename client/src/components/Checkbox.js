import React, { useState } from 'react';
import CheckItem from './CheckItem';
import Message from './Message';
import Styled from 'styled-components';

//TODO
// Add link to return button (maybe scroll?)
// set same background as parent component on screen view

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');

  const id = guest._id;

  // Guest's family members / partner
  const guestParty = guest.guest_party;

  // Save selected/unselected guests
  const attending = {};

  const addAttendingGuest = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    // Save or overwrite guests w/their  value
    // selected (true) / unselected (false)
    guestList.forEach((guest) => {
      if (guest.props.name === name) {
        attending[name] = isChecked;
      }
      setError('');
    });

    console.log('obj', attending);
  };

  // Create checkboxes for each family member / partner
  let guestList = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={addAttendingGuest} />
  ));

  const sendRsvp = () => {
    // Save only guests with selected (true) value.
    const att = [];

    for (let guest in attending) {
      if (attending[guest]) {
        att.push(guest);
      }
    }

    function updateGuest() {
      // Update guest
      if (att.length) {
        guest.rsvpd = true;
        guest.phone = phone;
        guest.guest_party = att;
        setRegister(true);
        console.log(guest);
      } else {
        setError('Selecciona por lo menos un invitado.');
      }
    }

    updateGuest();

    // Sending updated guest to DB
    // const put = {
    //   method: 'put',
    //   body: JSON.stringify(guest),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // };
    // fetch(`http://localhost:8000/api/guests/${id}`, put)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div>
      {register ? (
        <Section>
          <div>
            <p>
              {' '}
              Tu registro ha quedado confirmado.
              <br />
              ¡Muchas gracias por acompañarnos!{' '}
            </p>
          </div>
          <button>Volver al inicio</button>
        </Section>
      ) : (
        <Section>
          <p>Selecciona los invitados que asistirán:</p>
          <Message msg={error} />
          <div>{guestList}</div>
          <button onClick={sendRsvp}>Confirmar</button>
        </Section>
      )}
    </div>
  );
};

const Section = Styled.section`
background-color: #ced2d5;
display: grid;
grid-template-rows: auto;
min-height: 45vh;
height: fit-content;
justify-content: center;
align-content: center;
gap: 1em;

button {
  margin: auto;
  margin-top: 1em;
}

`;

export default Checkbox;
