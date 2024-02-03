const bcrypt = require('bcrypt');
const _ = require('lodash');
const { userInfo, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello CQH!');
    res.send('../index.html');
});

router.post('/', async (req, res, next) => {
    try {
        // Validate the request data
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Check if the user already exists
        let user = await userInfo.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'This email address already exists!' });
        }

        // Create a new user
        // user = new userInfo({
        //     firstname: req.body.firstname,
        //     lastname: req.body.lastname,
        //     phone: req.body.phone,
        //     email: req.body.email,
        //     password: req.body.password
        // });

        user = new userInfo(_.pick(req.body, ['firstname', 'lastname', 'phone', 'email', 'password']));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        res.send(_.pick(user, ['_id', 'firstname', 'lastname', 'phone', 'email', 'password']));

        // res.status(201).json(user);
    } catch (error) {
        // Pass the error to the next middleware
        next(error);
    }
});

module.exports = router;
