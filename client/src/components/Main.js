import React from 'react';
import Counter from './Counter';
import Styled from 'styled-components';
import InstaPhoto from '../img/B&A-21-2.jpg';

function Main() {
  return (
    <header>
      <div>
        <h1>Brenda & Aarón</h1>
        <p>11 de octubre de 2020</p>
        {/* `     <p>
        Faltan <Counter /> días
      </p>` */}
      </div>
    </header>
  );
}

export default Main;
