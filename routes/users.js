const { userInfo, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello CQH!');
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
            return res.status(400).json({ error: 'This user already exists!' });
        }

        // Create a new user
        user = new userInfo({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        });


        await user.save();

        res.status(201).json(user);
    } catch (error) {
        // Pass the error to the next middleware
        next(error);
    }
});

module.exports = router;
