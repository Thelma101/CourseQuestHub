const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const router = express.Router();
const { userInfo } = require('../models/user');

// Initialize passport
app.use(passport.initialize());

// Set up Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: '640739846522-jnufdr2frg4opjcc0fvkqmqa8aj8iqfo.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        // Handle user profile data here, e.g., save to the database
        return done(null, profile);
    }
));

// Google OAuth login route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect or respond as needed
        res.redirect('/dashboard');
    }
);

// Protected route example
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Welcome to your dashboard!');
    } else {
        res.redirect('/auth/google');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
