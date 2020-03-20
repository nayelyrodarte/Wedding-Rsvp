const express = require('express');
const router = express.Router();

const guest = require('./models/Guest');

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

router.get('/guest', guest);
