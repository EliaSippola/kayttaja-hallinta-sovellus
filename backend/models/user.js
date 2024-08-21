const mong = require('mongoose');

// user schema
// contains Id, Name, Password and Bio
const userSchema = new mong.Schema({
    Id: {
        type: mong.Types.ObjectId,
        required: true
    },
    Name: {
        type: mong.Types.String,
        required: true
    },
    Password: {
        type: mong.Types.String,
        required: true
    },
    Bio: {
        type: mong.Types.String,
        required: false
    }
});

module.exports = mong.model('User', userSchema);