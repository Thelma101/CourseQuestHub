const Joi = require('joi');
const mongoose = require('mongoose');

const userInfo = mongoose.model('User', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        minlength: 11,
        maxlength: 255,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));

function validateUser(user) {
    const schema = {
        firstname: Joi.string().min(2).max(50).required(),
        lastname: Joi.string().min(2).max(50).required(),
        phone: Joi.number().min(11).max(50).required(),
        email: Joi.string().min(10).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

exports.userInfo = userInfo;
exports.validate = validateUser;
