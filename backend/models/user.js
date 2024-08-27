const mong = require('mongoose');

// user schema
// contains Id, Name, Password and Bio
const userSchema = new mong.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    }
});

module.exports = mong.model('User', userSchema);