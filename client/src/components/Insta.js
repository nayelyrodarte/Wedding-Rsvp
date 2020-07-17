import React from 'react';
import InstaLogo from '../img/noun_Camera_49605.svg';

export default function Insta() {
  return (
    <section className='instagram__container'>
      <div>
        <img src={InstaLogo} alt='Instagram logo' />
        <p>Etiqueta tus fotos con nuestro hashtag</p>
        <p>#BRENDA&AARON2020</p>
      </div>
    </section>
  );
}
