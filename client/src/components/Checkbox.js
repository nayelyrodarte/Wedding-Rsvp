import React from 'react';
import CheckItem from './CheckItem';
import Spinner from './Spinner';
import Styled from 'styled-components';

const Items = Styled.div`
      display: grid;
      grid-row: auto;
      
`;

const Checkbox = ({ guests, name, loading }) => {
  const findGuest = guests
    .filter((guest) => guest.name === name)
    .map((foundGuest) => foundGuest.acc);

  //   if (loading) {
  //     return <Spinner />;
  //   }

  //;

  //  />
  let items = findGuest[0].map((item) => <CheckItem name={item} key={item} />);

  return (
    <div>
      {' '}
      <p>Selecciona los invitados que asistirán:</p>
      <Items>{items}</Items>
    </div>
  );
};
export default Checkbox;
