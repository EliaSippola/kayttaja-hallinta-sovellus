const exp = require('express');
const dotenv = require('dotenv');
const path = require('path');
const conn = require('./config/db_config');
const cors = require('cors');
const fs = require('fs');

// config
dotenv.config();

// connect to db
conn();

// ports from .env
const PORT = process.env.PORT || 3000;

// app
const app = exp();

app.use(exp.json());
app.use(cors());

// backend
// get routes
const userRouter = require("./routes/db_routes");

// use routes
app.use('/api/users', userRouter);

// frontend
// check if build folder exists:
if (fs.existsSync(path.join(__dirname, 'build'))) {
    // frontend build
    app.use(exp.static(path.join(__dirname, 'build')));

    // send everything to index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    console.log("\x1b[38;5;42mBuild folder detected, opening on '*'\x1b[0m");

} else {
    app.get("*", (req, res) => {
        res.status(404).end();
    });

    console.log("\x1b[38;5;196mNo build folder detected. Returning 404 on '*'\x1b[0m");

}

// listen on PORT
app.listen(PORT, (err) => {
    if (!err) {
        console.log("\x1b[38;5;42mServer running on port " + PORT + "\x1b[0m");
    } else {
        console.log("\x1b[38;5;196mCould not run server. Server error: " + err + "\x1b[0m");
    }
});