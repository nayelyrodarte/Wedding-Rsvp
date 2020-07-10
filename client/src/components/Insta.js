import React from 'react';
import Styled from 'styled-components';
import InstaPhoto from '../img/BA-Horizon.jpg';
import InstaLogo from '../img/noun_Camera_49605.svg';

const InstaContainer = Styled.div`
  background-image: url(${InstaPhoto});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 120%;
  background-color: #E0E4E3;
  height: 50vh;
  width: 100%;

  p:last-of-type {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 3em;
  }

  img {
    display: inline;
    width: 3rem; 
  }
}
`;

export default function Insta() {
  return (
    <InstaContainer>
      <div>
        <img src={InstaLogo} alt='Instagram logo' />
        <p>Etiqueta tus fotos con nuestro hashtag</p>
        <p>#BRENDA&AARON2020</p>
      </div>
    </InstaContainer>
  );
}
