const express = require('express');
const router = express.Router();
const User = require('./models/Guest');

// @route GET api/guests
router.get('/', (req, res) => {
  res.send({ msg: 'hello' });
});

// @route PUT api/guests/:id

//router.put('/:id', (req, res));

module.exports = router;
