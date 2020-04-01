const mongoose = require('mongoose');

const guestListSchema = mongoose.Schema({
  guests: Array
});

module.exports = mongoose.model('GuestList', guestListSchema);
