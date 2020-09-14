import React from 'react';

const Message = ({ msg, type }) => {
  switch (type) {
    case 'error':
      return <div className='error message'>{msg}</div>;
      break;
    case 'charging':
      return <div className='charging message'>{msg}</div>;
      break;
    default:
      return <div className='message'>{msg}</div>;
      break;
  }
};

export default Message;
