const Joi = require('joi');
const config = require('config');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const login = require('./routes/login');
const forgotPassword = require('./routes/password-auth/forgot-password');
const resetPassword = require('./routes/password-auth/reset-password');
const express = require('express');
const app = express();


if (!config.has('PrivateKey')) {
    console.error('Error: PrivateKey is not defined. Config:', config.util.toObject());
    process.exit(1);
}


mongoose.connect('mongodb://localhost:27017/CourseQuestHub', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


app.use(express.json());

// CHANGE THIS URL LINK LATER
app.use('/api/cqh/users', users);
app.use('/api/cqh/auth', auth);
app.use('/api/cqh/login', login);
app.use('/api/cqh/forgot-password', forgotPassword);
app.use('/api/cqh/reset-password', resetPassword);

// Error handler middleware at the end
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error, check phone number input.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Hi Thelma, listening now on port ${port}...`));
