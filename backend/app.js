const exp = require('express');
const dotenv = require('dotenv');
const path = require('path');

// config
dotenv.config();

// ports from .env
const PORT = process.env.PORT || 3000;

// app
const app = exp();

// frontend build
app.use(exp.static(path.join(__dirname, 'build')));

// send everything to index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// listen on PORT
app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server running on port " + PORT);
    } else {
        console.log("Could not run server. Server error: " + err);
    }
});