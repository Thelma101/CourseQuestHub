const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./routes/users');
const registration = require('./routes/auth');
const login = require('./routes/login');
const logout = require('./routes/logout');
const allUsers = require('./routes/all-users');
const changePassword = require('./routes/change-password');
const forgotPassword = require('./routes/forgot-password');
const resetPassword = require('./routes/reset-password');
const deleteAccount = require('./routes/delete-account');
const coursesApp = require('./routes/courses/coursesRoute');
const contactUs = require('./routes/contactUs/contact-us');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Tee', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

// Route configuration
app.use('/api/cqh/users', users);
app.use('/api/cqh/registration', registration);
app.use('/api/cqh/login', login);
app.use('/api/cqh/logout', logout);
app.use('/api/cqh/all-users', allUsers);
app.use('/api/cqh/change-password', changePassword);
app.use('/api/cqh/forgot-password', forgotPassword);
app.use('/api/cqh/reset-password', resetPassword);
app.use('/api/cqh/delete-account', deleteAccount);
app.use('/api/cqh/contact-us', contactUs);
app.use('/api/cqh/courses-app', coursesApp);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error, Check Phone Number Input.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Hi Thelma, listening now on port ${port}...`));
