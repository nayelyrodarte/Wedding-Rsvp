import React from 'react';

function Insta() {
  return (
    <div style={{ margin: '1.5em' }}>
      <a href='https://www.instagram.com'>
        <i
          className='fa fa-instagram fa-2x'
          aria-hidden='true'
          styles={{ color: 'white' }}
        ></i>
      </a>

      <p>Etiqueta tus fotos con nuestro hashtag</p>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>#BRENDA&AARON2020</p>
    </div>
  );
}

export default Insta;
