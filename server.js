const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const db = process.env.MONGODB;
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Define routes
app.use('/api/guests', require('./routes/guests'));

// Middleware
app.use(express.json());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected with Mongo');
  })
  .catch(function (err) {
    console.error(err);
  });
