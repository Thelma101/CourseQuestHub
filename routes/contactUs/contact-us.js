const Joi = require('joi');
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.use(express.json());

router.post('/', async (req, res) => {
    // Validate the email in the request
    const { error } = validateEmail(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { name, phone, email, message } = req.body;

    // Send the contact us email
    const emailSent = await sendEmail(email, 'akpata.thelma@gmail.com', name, phone, email, message);

    if (emailSent) {
        res.send('Contact us email sent successfully.');
    } else {
        res.status(500).send('Failed to send the contact us email.');
    }

    // Access the message field from the request body
    console.log('Received message:', message);
});

async function sendEmail(from, to, name, phone, email, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akpata.thelma@gmail.com',
            pass: 'oowy omdj jwdp qilj',
        }
    });

    try {
        await transporter.sendMail({
            from: from,
            to: 'akpata.thelma@gmail.com',
            subject: 'Contact Us Message from ' + name,
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}` 
        });

        return true; // Email sent successfully
    } catch (error) {
        console.error('Error sending email:', error);
        return false; // Failed to send email
    }
}

function validateEmail(req) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        phone: Joi.string().min(11).max(255).required(),
        email: Joi.string().min(10).max(255).required().email(),
        message: Joi.string().min(25).max(1000).required(),
    });

    return schema.validate(req, { abortEarly: false });
}

module.exports = router;