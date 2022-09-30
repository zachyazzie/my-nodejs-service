const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'ENV_FILENAME' });
const port = process.env.PORT || 8080;

app.use(bodyParser.json()).use('/', require('./routes'));

//Connect to DB

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
