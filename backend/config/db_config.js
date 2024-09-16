const mong = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// conn
const conn = async () => {
    try {
        // connect with MONGODB_URI
        await mong.connect(process.env.MONGODB_URI);
        console.log('\x1b[38;5;42mMongoDB connected succesfully\x1b[0m');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = conn;