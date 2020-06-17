import React from 'react';
import Styled from 'styled-components';

const GiftsContainer = Styled.div`
.bank {
  display: grid;
  width: 60vw;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.5em;
  justify-content: stretch;
}

.gifts {
  height: auto;
}
`;

function Gifts() {
  return (
    <GiftsContainer>
      <h3> Mesa de regalos </h3>
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
      <section>
        <h3>Datos bancarios</h3>
        <div className='bank'>
          <div>
            <p>Brenda Judith Arias Quintana</p>
            <p>Banorte</p>
            <p>No. de tarjeta 4915 6664 7204 6550</p>
          </div>
          <div>
            <p>Marcos Aaron Rivera Olivas</p>
            <p>BBVA</p>
            <p> No. de tarjeta 4152 3133 8061 3849</p>
          </div>
        </div>
      </section>
    </GiftsContainer>
  );
}

export default Gifts;
