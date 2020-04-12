const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');

// @route GET api/guests
// Get all guests

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find({ rsvpd: false });
    res.json(guests);
    console.log(guests);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Error del servidor');
  }
});

module.exports = router;
