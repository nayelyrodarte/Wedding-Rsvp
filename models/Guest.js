const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  rsvpd: false,
  grp: Number,
  name: String,
  acc: Array
});

module.exports = mongoose.model('guest', guestSchema);
