const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { userInfo } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Validate The HTTP Request
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Find the user by their email address
        let user = await userInfo.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: 'Incorrect email. Try again!' });
        } else {
            
        }

        // Validate the Credentials in MongoDB, match those provided in the request
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Incorrect password. Try again!' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.json({ token, message: `Login successful! Welcome, ${user.firstname}` });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
    }
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(10).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req, { abortEarly: false });
}

module.exports = router;
