import React from 'react';
import Styled from 'styled-components';

const MessageContainer = Styled.div`
background-color: #F3ECC3;
border: 1.5px solid #D49504;
border-radius: 10px;
box-sizing: border-box;
padding: 0.2em;
color: #D49504;
margin: auto;
height: min-content;
position: relative;
width: 75%;

@media screen and (min-width: 768px) {
  width: 30%;
  right: 30%;
}
`;

const Message = ({ msg }) => {
  if (msg === 'Cargando') {
    return (
      <MessageContainer>
        <div className='charging'>{msg}</div>
      </MessageContainer>
    );
  } else {
    return (
      <MessageContainer>
        <div>{msg}</div>
      </MessageContainer>
    );
  }
};

export default Message;
