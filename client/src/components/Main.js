import React from 'react';
import Counter from './Counter';

function Main() {
  return (
    <section className='header'>
      <h1>Brenda & Aarón</h1>
      <p>11 de octubre de 2020</p>
      <p>
        Faltan <Counter /> días
      </p>
    </section>
  );
}

export default Main;
