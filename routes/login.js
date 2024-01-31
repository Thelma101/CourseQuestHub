// login.js

const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { userInfo } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    // Validate The HTTP Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Now find the user by their email address
    let user = await userInfo.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email. Try again!');

        // TODO: Generate and send a reset link to the user's email

        // res.send('Password reset link sent successfully.');
    }

    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect password. Try again!');
    }

    const token = jwt.sign({ _id: user._id }, 'PrivateKey');
    res.send(`Login successful! Welcome, ${user.firstname}`);
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(10).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req, { abortEarly: false });
}

module.exports = router;
