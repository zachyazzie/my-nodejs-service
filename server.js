const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json()).use('/', require('./routes'));

//Connect to DB
mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to DB!');
});

app.listen(8080);
