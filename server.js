const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;

app.use(bodyParser.json()).use('/', require('./routes'));

//Connect to DB

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  })
  .catch((err) => {
    console.error('Error connecting to Mongo', err);
  });
