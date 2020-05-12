import React from 'react';

const onChange = () => {
  console.log('checkbox working');
};

const Checkbox = ({ name }) => {
  return (
    <div
      style={{
        width: '10em',
        textAlign: 'left',
      }}
    >
      <label htmlFor={name}>
        <input
          type='checkbox'
          checked={null}
          onChange={onChange}
          name='name'
          key={name}
        />
        <p style={{ display: 'inline', lineHeight: '1.7' }}>{name}</p>
      </label>
    </div>
  );
};

export default Checkbox;
