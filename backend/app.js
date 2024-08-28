const exp = require('express');
const dotenv = require('dotenv');
const path = require('path');
const conn = require('./config/db_config');
const cors = require('cors');

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