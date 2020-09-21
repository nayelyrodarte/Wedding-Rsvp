import React from 'react';

const Message = ({ msg, type }) => {
  switch (type) {
    case 'error':
      return <div className='error message'>{msg}</div>;
    case 'charging':
      return (
        <div className='message'>
          <span className='charging'>{msg}</span>
        </div>
      );
    default:
      return <div className='message'>{msg}</div>;
  }
};

export default Message;
