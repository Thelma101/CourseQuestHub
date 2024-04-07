const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const { userInfo } = require('../models/user');
const router = express.Router();

router.delete('/', async (req, res) =>{
    const {error} = deletePassword(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    }

   // Find the user by email
   const user = await userInfo.findOne({email:req.body.email});
   if (!user) {
    return res.status(404).send('User not found.');
   }

    // Check if the provided password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect password. Account deletion failed.');
    }

    // Delete the user account
    await userInfo.deleteOne({ _id: user._id });
    res.status(200).send('Account successfully deleted.');
});

function deletePassword(req){
    const schema = Joi.object({
        email: Joi.string().min(10).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });

    return schema.validate(req, {abortEarly: false});
}

module.exports = router;
