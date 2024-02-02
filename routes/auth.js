const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const _ = require('lodash');
const { userInfo, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const sendEmail = require('./sendEmail');


const clientURL = "cqh.com";
welcomeToken = crypto.randomBytes(15).toString('base64url');


router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exists
    let user = await userInfo.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('It seems you already have an account, please log in instead.');
    }

    // Insert the new user if they do not exist yet
    user = new userInfo(_.pick(req.body, ['firstname', 'lastname', 'phone', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    // Send a welcome email
    const welcomeLink = `${clientURL}/registration?token=${welcomeToken}&id=${user._id}`;
    const emailSent = await sendEmail(user.email, "Course Quest Hub: Welcome!", generateWelcomeEmail(user.firstname, welcomeLink));
// res.send(emailSent);

// Return a success response
    res.send(
         `Hello ${firstname}, thank you for registering with us. Your account has been successfully created.
        You can access your dashboard using the below link`);
});

function generateWelcomeEmail(firstname, welcomeLink) {
    return `
    <p>Hello ${firstname},</p>
    <p>Welcome on board! Your account has been successfully created. You can access your dashboard via this link:</p>
    <a href="${welcomeLink}">${welcomeLink}</a>
    <p>Enjoy!</p> `;
}

module.exports = router;
