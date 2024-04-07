const Joi = require('joi');
const crypto = require('crypto');
const { userInfo, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const sendEmail = require('./sendEmail');

const clientURL = "cqh.com";

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
    const resetToken = crypto.randomBytes(10).toString('hex');

    // Save the reset token and its expiration time in the user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

     // Send a reset link to the user's email
     const resetLink = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
    
     // Use the sendEmail function to send the email, pass user.firstname and resetLink as parameters
     const emailSent = await sendEmail(user.email, "Course Quest Hub: Password Reset Request", generateResetEmail(user.firstname, resetLink));
 
     if (emailSent) {
         res.send('Password reset link sent successfully.');
     } else {
         res.status(500).send('Failed to send the reset email.');
     }
 });
 
 function validateEmail(req) {
     const schema = Joi.object({
         email: Joi.string().min(10).max(255).required().email(),
     });
 
     return schema.validate(req, { abortEarly: false });
 }
 
 function generateResetEmail(firstname, resetLink) {
     return `
         <p>Hello ${firstname},</p>
         <p>You have requested to reset your password. Click the link below to reset it:</p>
         <a href="${resetLink}">${resetLink}</a>
         <p>This link will expire in 1 hour.</p>
         <p>If you did not request a password reset, please ignore this email.</p>
     `;
 }


module.exports = router;