export function modifyGuest(id, updatedGuest) {
  const config = {
    method: 'put',
    body: JSON.stringify(updatedGuest),
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
}
