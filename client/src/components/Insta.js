import React from 'react';
import Styled from 'styled-components';
import InstaPhoto from '../img/B&A-21-2.jpg';

const InstaContainer = Styled.div`
  background-image: url(${InstaPhoto});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #a89ca6;
  width: 100vw;
  height: 40vh;
  display: grid;

  p {
      color: black;
      align-self: end;
      margin: 1em;
      filter: drop-shadow(16px 16px 20px black);

      div {
          font-weight: bold;
          font-size: 1.5em;    
      }
  }
}
`;

export default function Insta() {
  return (
    <InstaContainer>
      <p>
        Etiqueta tus fotos con nuestro hashtag
        <div>#BRENDA&AARON2020</div>
      </p>
    </InstaContainer>
  );
}
