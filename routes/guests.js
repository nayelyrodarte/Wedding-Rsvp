const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// @route GET api/guests
// Get all guests

router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find({ rsvpd: false });
    res.json(guests);
    console.log(guests);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Error del servidor').end();
  }
});

//@route PUT api/guests/:id
// Update guest
router.put('/:id', async (req, res) => {
  try {
    let guest = await Guest.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json('Invitado actualizado');
  } catch (error) {
    console.error(error.message);
    res.status(500).json('Error al actualizar invitado').end();
  }
});

module.exports = router;
