import React from 'react';
import Styled from 'styled-components';
import InstaPhoto from '../img/BA-Sunset.jpg';

const InstaContainer = Styled.div`
margin: 1em 0;
  align-items: end;
  background-image: url(${InstaPhoto});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-color: #a89ca6;
  display: grid;
  height: 50vh;
  width: 100%;

  p {
      filter: drop-shadow(16px 16px 20px black);
      color: white;
  }

  p:last-of-type {
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 1em;
  }
}
`;

export default function Insta() {
  return (
    <InstaContainer>
      <div>
        <p>Etiqueta tus fotos con nuestro hashtag</p>
        <p>#BRENDA&AARON2020</p>
      </div>
    </InstaContainer>
  );
}
