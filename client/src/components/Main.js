import React from 'react';
import { counter } from '../functions';

function Main() {
  return (
    <header>
      <h1>
        Brenda<span>&</span>Aarón
      </h1>
      <div>
        <p>11 de octubre de 2020</p>
        <p> {counter()}</p>
      </div>
    </header>
  );
}

export default Main;
