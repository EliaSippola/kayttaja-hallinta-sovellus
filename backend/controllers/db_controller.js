const User = require('../models/user');

// get all users
exports.getAll = async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);

        res.status(200).end();
    } catch (err) {
        res.status(500).send('Server Error');
    }

}

// get one user
exports.getOne = async (req, res) => {

    try {
        const id = req.params.id;

        if (id == null) {
            req.status(400).send("No id specified");
            return;
        }

        const users = await User.find({'_id':id});
        res.json(users);

        res.status(200).end();
    } catch (err) {
        res.status(500).send("Server Error");
    }

}

// create user
exports.create = async (req, res) => {

    try {
        let user = new User;
        user.name = req.body.name;
        user.password = req.body.password;
        user.bio = req.body.bio != null ? req.body.bio : '';

        await User.insertMany(user);

        res.status(200).end();
    } catch (err) {
        res.status(500).send("Server Error");
    }

}

// update user
exports.update = async (req, res) => {

    try {

        const id = req.params.id;

        if (id == null) {
            req.status(400).send("No id specified");
            return;
        }

        const users = await User.find({"_id":id});

        // status 204 (not found)
        if (!users) {
            res.status(204).end();
        }

        let name = users.name;
        let bio = users.bio;

        if (req.body.name != null) {
            name = req.body.name;
        }

        if (req.body.bio != null) {
            bio = req.body.bio;
        } else {
            bio = '';
        }

        await User.updateOne({"_id": id}, {$set:{"name":name, "bio":bio}});

        res.status(200).end();
    } catch (err) {
        res.status(500).send("Server Error: " + err.message);
    }

}

// delete user
exports.delete = async (req, res) => {

    try {

        const id = req.params.id;

        if (id == null) {
            req.status(400).send("No id specified");
            return;
        }

        const users = await User.find({"_id":id});

        // status 200 (not found, delete succesful)
        if (!users) {
            res.status(200).end();
            return;
        }

        await User.deleteOne({"_id":id});

        res.status(200).end();
    } catch (err) {
        res.status(500).send('Server Error: ' + err.message);
    }

}