import React from 'react';

const Gifts = ({ isModalOpen }) => {
  return (
    <section className='gifts-component'>
      <h2> Mesa de regalos </h2>
      <div className='buttons'>
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

        <button onClick={() => isModalOpen(true)}>Datos bancarios</button>
      </div>
    </section>
  );
};

export default Gifts;
