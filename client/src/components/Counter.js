function Counter() {
  const wedDay = new Date('2020,10,11 00:00:00');
  let dateNow = Date.now();

  let daysRemaining = Math.round((wedDay - dateNow) / (1000 * 60 * 60 * 24));

  return daysRemaining;
}

export default Counter;
