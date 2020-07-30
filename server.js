const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
cors();

const db = process.env.MONGODB;
const PORT = process.env.PORT || 8000;
const host = '0.0.0.0' || localhost;

app.listen(PORT, host, () => console.log(`Server started on port ${PORT}`));

// Define routes
app.use('/api/guests', require('./router'));

// Serve static assets in production (react)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected with Mongo');
  })
  .catch(function (err) {
    console.error(err);
  });
