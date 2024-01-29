const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/CQH', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));


// Define your routes and middleware
const users = require('./routes/users');
app.use(express.json());
app.use('/api/cqh/users', users);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
