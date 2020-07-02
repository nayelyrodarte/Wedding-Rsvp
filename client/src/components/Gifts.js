import React from 'react';
import Modal from './Modal';

const Gifts = () => {
  return (
    <section className='gifts__container'>
      <Modal />
      <h2> Mesa de regalos </h2>
      <div className='gifts__container_buttons'>
        <button>
          <a href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/50345156'>
            Liverpool
          </a>
        </button>
        <button>
          <a href='https://www.amazon.com.mx/wedding/brenda-arias-aaron-rivera-chihuahua-october-2020/registry/2TZBNHT0S37PF'>
            Amazon
          </a>
        </button>
        <button
          onClick={(e) =>
            (e.target.parentNode.childNodes[0].style.display = 'block')
          }
        >
          Datos bancarios
        </button>
      </div>
    </section>
  );
};

export default Gifts;
