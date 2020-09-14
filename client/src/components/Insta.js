import React from 'react';
import InstaLogo from '../img/insta_logo.svg';

export default function Insta() {
  return (
    <section className='instagram-component'>
      <div>
        <img src={InstaLogo} alt='Instagram logo' className='filter' />
        <p>Etiqueta tus fotos con nuestro hashtag</p>
        <p>#BRENDA&AARON2020</p>
      </div>
    </section>
  );
}
