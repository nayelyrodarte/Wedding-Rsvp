const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const db = process.env.MONGODB;
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Define routes
app.use('/api/guests', require('./routes/guests'));

// Serve static assets in production (react)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get(
    '*',
    (req,
    (res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
  );
}

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected with Mongo');
  })
  .catch(function (err) {
    console.error(err);
  });
