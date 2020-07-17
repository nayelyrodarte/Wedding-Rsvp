import React from 'react';
import Counter from './Counter';

function Main() {
  return (
    <header>
      <h1>B&A</h1>
      <div>
        <p>11 de octubre de 2020</p>
        <p>
          Faltan <Counter /> días
        </p>
      </div>
    </header>
  );
}

export default Main;
