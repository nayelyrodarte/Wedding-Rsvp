const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new mongoose.Schema(
  {
    name: String,
    acc: Array,
    rsvpd: Boolean,
  },
  { collection: 'guests' }
);

module.exports = mongoose.model('Guest', guestSchema);
