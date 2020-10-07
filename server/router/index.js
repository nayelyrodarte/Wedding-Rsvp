const express = require('express');
const router = express.Router();
const Guest = require('../mongoose-models/Guest');

// @route GET api/guests
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find({ rsvpd: false });
    res.json(guests);
    res.status(200).json('Base de datos actualizada');
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
