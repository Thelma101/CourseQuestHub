const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userInfo, validate } = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();

router.put('/', auth, async (req, res) => {
    // Validate the request body
    const { error } = validateChangePassword(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Find the user by ID
    const user = await userInfo.findById(req.user._id);
    if (!user) {
        return res.status(404).send('User not found.');
    }

    // Check if the provided old password is correct
    const validOldPassword = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!validOldPassword) {
        return res.status(401).send('Invalid old password.');
    }

    // Hash and update the password with the new one
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newPassword, salt);
    await user.save();

    // Generate a new JWT token
    const token = jwt.sign({ _id: user._id }, 'PrivateKey');

    res.header('x-auth-token', token).send('Password changed successfully.');
});

function validateChangePassword(req) {
    const schema = Joi.object({
        oldPassword: Joi.string().min(5).max(255).required(),
        newPassword: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req, { abortEarly: false });
}

module.exports = router;