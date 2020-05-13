import React from 'react';

const onChange = () => {
  console.log('checkbox working');
};

const Checkbox = ({ name }) => {
  return (
    <div className='checkbox_container'>
      <label htmlFor={name}>
        <input
          type='checkbox'
          checked={null}
          onChange={onChange}
          name='name'
          key={name}
        />
      </label>
      <p>{name}</p>
    </div>
  );
};

export default Checkbox;
