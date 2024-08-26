const mong = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// conn
const conn = async () => {
    try {
        // connect with MONGODB_URI
        await mong.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('MongoDB connected succesfully');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = conn;