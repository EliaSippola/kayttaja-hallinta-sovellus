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
        res.json(user);

        res.status(200).end();
    } catch (err) {
        res.status(500).send('Server Error');
    }

}

// create user
exports.create = async (req, res) => {

    try {
        let user = new User;
        user.name = req.body.name;
        user.password = req.body.password;

        await User.insertMany(user);

        console.log("Created user");

        res.status(200).end();
    } catch (err) {
        res.status(500).send('Server Error');
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

        await User.updateOne({"_id":users._id}, {$set:{"name":name, "bio":bio}});

        console.log("Updated user");

        res.status(200).end();
    } catch (err) {
        res.status(500).send("Server Error");
    }

}

// delete user
exports.delete = async () => {

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
            console.log("Deleted empty set");
            return;
        }

        await User.deleteOne({"_id":users._id});

        console.log("Deleted user");
        res.status(200).end();
    } catch (err) {
        res.status(500).send("Server Error");
    }

}