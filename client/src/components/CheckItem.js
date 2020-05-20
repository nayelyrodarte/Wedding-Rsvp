import React from 'react';

const CheckItem = ({ name, onChange }) => {
  return (
    <div className='checkbox_container'>
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
      <p>{name}</p>
    </div>
  );
};

export default CheckItem;
