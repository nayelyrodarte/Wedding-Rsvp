import React, { useState } from 'react';
import CheckItem from './CheckItem';
import Message from './Message';
import Styled from 'styled-components';

//TODO
// Disable button w/no boxes checked
// Add link to main component to return button (maybe scroll?)

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');

  //console.log(guest);

  const id = guest._id;

  // Guest's family members / partner
  const guestParty = guest.guest_party;

  // Save attending guests (selected from checkboxes @ list binding)
  let attending = new Map();

  const addAttendingGuest = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    list.forEach((guest) => {
      if (guest.props.name === name) {
        attending.set(name, isChecked);
      }
    });

    console.log(attending);
  };

  // Checkboxes for each family member / partner
  let list = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={addAttendingGuest} />
  ));

  const sendRsvp = () => {
    const attendingGuest = [];

    function getGuest(isGoing, name) {
      if (isGoing === true) {
        attendingGuest.push(name);
      }
    }

    attending.forEach(getGuest);

    if (attendingGuest.length) {
      send();
    } else {
      setError(<Message msg='Selecciona por lo menos un invitado.' />);
    }

    function send() {
      // Update guest
      guest.rsvpd = true;
      guest.phone = phone;
      guest.guest_party = attendingGuest;
      setRegister(true);
      setError('');

      console.log(guest);
    }

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
      {error}
      {register ? (
        <div>
          <p> Tu registro ha quedado confirmado.</p>
          <p> ¡Muchas gracias por acompañarnos! </p>
          <button>Volver al inicio</button>
        </div>
      ) : (
        <Section>
          <p>Selecciona los invitados que asistirán:</p>
          <div>{list}</div>
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
