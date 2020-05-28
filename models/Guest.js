const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new mongoose.Schema(
  {
    name: String,
    guest_party: Array,
    rsvpd: Boolean,
    phone: String,
  },
  { collection: 'guests' }
);

module.exports = mongoose.model('Guest', guestSchema);
