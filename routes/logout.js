const { userInfo } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Logout successful.');
});

module.exports = router;
