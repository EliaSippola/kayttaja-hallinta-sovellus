const exp = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = exp();

// frontend
app.use(exp.static(path.join(__dirname, 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server running on port " + PORT);
    } else {
        console.log("Could not run server. Server error: " + err);
    }
});