import React from 'react';

function Insta() {
  return (
    <div style={{ margin: '1.5em' }}>
      <i
        className='fa fa-instagram fa-2x'
        aria-hidden='true'
        styles={{ color: 'white' }}
      />
      <p> Etiqueta tus fotos con nuestro hashtag </p>{' '}
      <p
        style={{
          fontSize: '1.7em',
          fontWeight: 'bold'
        }}
      >
        {' '}
        #BRENDA & AARON2020{' '}
      </p>{' '}
    </div>
  );
}

export default Insta;
