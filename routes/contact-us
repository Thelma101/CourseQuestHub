const Joi = require('joi');
const crypto = require('crypto');
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const sendEmail = require('./sendEmail');

const clientURL = "cqh.com";

router.post('/', async (req, res) => {
    // Validate the email in the request
    const { error } = validateEmail(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { email, subject, message } = req.body;

    // Send the contact us email
    const emailSent = await sendEmail(email, subject, generateContactUsEmail(message));

    if (emailSent) {
        res.send('Contact us email sent successfully.');
    } else {
        res.status(500).send('Failed to send the contact us email.');
    }
});

function validateEmail(req) {
    const schema = Joi.object({
        email: Joi.string().min(10).max(255).required().email(),
        subject: Joi.string().min(2).max(255).required(),
        message: Joi.string().min(5).max(1000).required(),
    });

    return schema.validate(req, { abortEarly: false });
}

function generateContactUsEmail(message) {
    return `
    <p>Hello,</p>
    <p>You have received a new message via the contact us form:</p>
    <p>${message}</p>
    <p>Regards,</p>
    <p>Admin, Course Quest Hub</p>
`;
}

module.exports = router;
