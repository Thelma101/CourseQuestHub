const express = require('express');
const config = require('config');
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
// const googleAuth = require('./routes/google-auth');
const coursesApp = require('./routes/courses/coursesRoute');
const contactUs = require('./routes/contactUs/contact-us');

const passport = require('passport');

const app = express();
app.use(cors()); 
app.use(express.json());


if (!config.has('PrivateKey')) {
    console.error('Error: PrivateKey is not defined. Config:', config.util.toObject());
    process.exit(1);
}


// mongoose.connect('mongodb://localhost:27017/Tee', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://coursequesthub:fePziw-bewbaz-5cofme@cluster0.lssixvh.mongodb.net/CourseQuestHub', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

// CHANGE THIS URL LINK LATER
app.use('/api/cqh/users', users);
app.use('/api/cqh/registration', registration);
app.use('/api/cqh/login', login);
app.use('/api/cqh/logout', logout);
app.use('/api/cqh/all-users', allUsers);
app.use('/api/cqh/change-password', changePassword);
app.use('/api/cqh/forgot-password', forgotPassword);
app.use('/api/cqh/reset-password', resetPassword);
app.use('/api/cqh/delete-account', deleteAccount);
// app.use('/api/cqh/google-auth', googleAuth);
app.use('/api/cqh/contact-us', contactUs);
app.use('/api/cqh/courses-app', coursesApp);



// Error handler middleware at the end
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Hi Thelma, listening now on port ${port}...`));
