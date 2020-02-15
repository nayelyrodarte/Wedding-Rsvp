function Counter() {
  const wedDay = new Date('2020,05,24 20:00:00');
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

export default Counter;