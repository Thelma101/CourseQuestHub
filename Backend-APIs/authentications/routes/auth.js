const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { userInfo, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

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
    } else {
        // Insert the new user if they do not exist yet
        user = new userInfo(_.pick(req.body, ['firstname', 'lastname', 'phone', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'firstname', 'lastname', 'phone', 'email', 'password']));
        return res.status(200).send('Thank you for registering with us. Your account has been successfully created.');
    }
});

module.exports = router;  
 
 
 
