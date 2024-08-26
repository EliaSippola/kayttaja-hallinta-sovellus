const mong = require('mongoose');

// user schema
// contains Id, Name, Password and Bio
const userSchema = new mong.Schema({
    name: {
        type: mong.Types.String,
        required: true
    },
    password: {
        type: mong.Types.String,
        required: true
    },
    bio: {
        type: mong.Types.String,
        required: false
    }
});

module.exports = mong.model('User', userSchema);