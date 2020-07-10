import React, { useState } from 'react';
import Modal from './Modal';

// TODO
// Get click exclusively from modal close button

const Gifts = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section className='gifts__container'>
      <h2> Mesa de regalos </h2>
      <div>
        <a
          className='btn'
          href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/50345156'
        >
          <span> Liverpool </span>
        </a>
        <a
          className='btn'
          href='https://www.amazon.com.mx/wedding/brenda-arias-aaron-rivera-chihuahua-october-2020/registry/2TZBNHT0S37PF'
        >
          <span> Amazon </span>
        </a>

        <button onClick={handleModalClick}>Datos bancarios</button>
      </div>

      {isModalOpen && <Modal isOpen={isModalOpen} />}
    </section>
  );
};

export default Gifts;
