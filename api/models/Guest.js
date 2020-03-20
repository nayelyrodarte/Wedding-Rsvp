const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  grp: Number,
  name: String,
  acc: Array
});

module.exports = moongose.model('Guest', guestSchema);
