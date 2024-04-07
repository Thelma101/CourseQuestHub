const bcrypt = require('bcrypt');
const _ = require('lodash');
const { userInfo, validate } = require('../models/user');
const express = require('express');
const router = express.Router();


// Define the API endpoint for fetching all users
router.get('/', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await userInfo.find();

        // Return the list of users in the response
        res.status(200).json(users);
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Export the router
module.exports = router;
