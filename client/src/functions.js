export function counter() {
  const wedDay = new Date('2020,10,11 00:00:00');
  let dateNow = Date.now();
  let n = 'n';
  let s = 's';

  let daysRemaining = Math.round((wedDay - dateNow) / (1000 * 60 * 60 * 24));
  if (daysRemaining === 1) {
    n = '';
    s = '';
  }

  return `Falta${n} ${daysRemaining} día${s}`;
}

export const restMethods = {
  put: function (id, updatedObj) {
    const config = {
      method: 'put',
      body: JSON.stringify(updatedObj),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch(`http://localhost:8000/api/guests/${id}`, config)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};
