const Joi = require('joi');
const crypto = require('crypto');
const { userInfo } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    // Validate the email in the request
    const { error } = validateEmail(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Find the user by email
    const user = await userInfo.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).send('User not found.');
    }

    // Generate a unique reset token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Save the reset token and its expiration time in the user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    // Send a reset link to the user's email
    const resetLink = `${clientURL}/passwordReset?token=${resetToken}&id=${email}`;
    sendEmail(user.email, "Password Reset Request", { firstname: user.firstname, resetLink: resetLink }, "./template/requestResetPassword.handlebars");

    // Return the reset link in the response
    res.send(resetLink);
});

function validateEmail(req) {
    const schema = Joi.object({
        email: Joi.string().min(10).max(255).required().email(),
    });

    return schema.validate(req, { abortEarly: false });
}

module.exports = router;