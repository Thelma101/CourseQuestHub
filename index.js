const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();

// mongoose.connect('mongodb://localhost:27017/CQH/CourseQuestHub')
//     .then(() => console.log('Congratulations! You are now connected to MongoDB!'))
//     .catch(err => console.error('Something went wrong', err));

mongoose.connect('mongodb://localhost:27017/CourseQuestHub', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


app.use(express.json());

// CHANGE THIS URL LINK LATER
app.use('/api/cqh/users', users);

// Error handler middleware at the end
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Hi, Thelma, listening now on port ${port}...`));
