import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 1.3em;
  margin-top: 2em;
`;

function Insta() {
  return (
    <div>
      <Content>
        <i className='fa fa-instagram fa-2x' aria-hidden='true'></i>
        <p>Utiliza nuestro hashtag</p>
        <p>#BRENDA&AARON2020</p>
      </Content>
    </div>
  );
}

export default Insta;
