const express = require('express');
const { router, survey } = require('./routes/courseRoute.js');

const app = express();

const PORT = 5000;



// Set up middleware to handle CORS manually
// so as not to block fetch

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json());

// Route to handle GET requests for course categories and each courses
app.use('/courses', router);

// Route to handle POST request for course recommendations
app.use('/survey', survey);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


