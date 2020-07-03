import React from 'react';
import Modal from './Modal';

const Gifts = () => {
  return (
    <section className='gifts__container'>
      <h2> Mesa de regalos </h2>
      <Modal />
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

        <button
          onClick={
            (e) =>
              console.log(
                (e.target.parentNode.parentNode.parentNode.firstChild.style.display =
                  'block')
              )
            //e.target.parentNode.childNodes[0].style.display = 'block')
          }
        >
          Datos bancarios
        </button>
      </div>
    </section>
  );
};

export default Gifts;
