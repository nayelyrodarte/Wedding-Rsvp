import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: #f3ecc3;
  border: 1.5px solid #d49504;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0.2em;
  color: #d49504;
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
