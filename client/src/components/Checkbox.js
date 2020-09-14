import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  position: relative;
  right: 3%;
  padding: 0.5em;
  line-height: 0.2em;

  label {
    display: inline;
  }
`;

const Checkbox = ({ name, onChange, checked }) => {
  return (
    <CheckboxContainer>
      <label htmlFor={name}>
        <input
          type='checkbox'
          checked={null}
          onChange={onChange}
          key={name}
          value={name}
        />
      </label>
      <span>{name}</span>
    </CheckboxContainer>
  );
};

export default Checkbox;
