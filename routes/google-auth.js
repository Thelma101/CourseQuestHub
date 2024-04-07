// const express = require('express');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const { userInfo } = require('../models/user'); 

// const app = express();

// // Initialize passport
// app.use(passport.initialize());

// // Set up Google OAuth Strategy
// passport.use(new GoogleStrategy({
//     clientID: '640739846522-jnufdr2frg4opjcc0fvkqmqa8aj8iqfo.apps.googleusercontent.com',
//     clientSecret: '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',
//     callbackURL: 'http://localhost:3000/auth/google/callback'
// },

//     async (accessToken, refreshToken, profile, done) => {
//         try {
//             // Check if the user already exists in the database
//             let user = await userInfo.findOne({ email: profile.emails[0].value });

//             if (!user) {
//                 // If the user doesn't exist, create a new user in the database
//                 user = new userInfo({
//                     id: profile.id,
//                     email: profile.emails[0].value,
//                     firstname: profile.name.givenName,
//                     lastname: profile.name.familyName,

//                 });
//                 await user.save();
//             }

//             return done(null, user);
//         } catch (error) {
//             return done(error, null);
//         }
//     }
// ));

// // Google OAuth login route
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// // Google OAuth callback route
// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         // Successful authentication, redirect or respond as needed
//         res.redirect('/dashboard');
//     }
// );

// // Start your server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });






const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { userInfo } = require('../models/user'); 

const router = express.Router();

// Initialize passport
router.use(passport.initialize());

// Set up Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: '640739846522-jnufdr2frg4opjcc0fvkqmqa8aj8iqfo.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
},

    async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if the user already exists in the database
            let user = await userInfo.findOne({ email: profile.emails[0].value });

            if (!user) {
                // If the user doesn't exist, create a new user in the database
                user = new userInfo({
                    id: profile.id,
                    email: profile.emails[0].value,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                });
                await user.save();
            }

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect or respond as needed
        res.redirect('/dashboard');
    }
);

// Start your server
const PORT = process.env.PORT || 3000;
router.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
