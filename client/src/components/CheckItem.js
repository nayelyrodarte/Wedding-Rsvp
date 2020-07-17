import React from 'react';
import Styled from 'styled-components';

const CheckboxContainer = Styled.div`
align-items: baseline;
display: grid;
gap: 0.5em;
grid-template-columns: 15% 70%;
height: 1.5em;
margin-top: 0.5em;
text-align: left;
white-space: no-wrap;

label {
  margin: 0 2em;
}

@media screen and (min-width: 767px) {
  grid-template-columns: 5% 95%;
}


`;

const CheckItem = ({ name, onChange, checked }) => {
  return (
    <CheckboxContainer>
      <label htmlFor={name}>
        <input
          type='checkbox'
          checked={null}
          onChange={onChange}
          name='name'
          key={name}
          value={name}
        />
      </label>
      <span>{name}</span>
    </CheckboxContainer>
  );
};

export default CheckItem;
