export function counter() {
  const wedDay = new Date('2021,10,11 00:00:00');
  let dateNow = Date.now();
  let n = 'n';
  let s = 's';

  let daysRemaining = Math.round((wedDay - dateNow) / (1000 * 60 * 60 * 24));

  while (daysRemaining > 0) {
    if (daysRemaining === 1) {
      n = '';
      s = '';
    }
    return `Falta${n} ${daysRemaining} día${s}`;
  }
}

export const rest = {
  getGuests: (params) => fetch('api/guests', params),
  modifyGuest: function (id, updatedObj) {
    const config = {
      method: 'put',
      body: JSON.stringify(updatedObj),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch(`/api/guests/${id}`, config)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};
