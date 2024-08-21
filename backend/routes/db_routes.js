const exp = require('express');
const router = exp.Router();
const dbController = require('../controllers/db_controller.js');

// get all users
router.get('/', dbController.get);

// post user
router.post('/', dbController.post);

// update user
router.put('/', dbController.put);

// delete user
router.delete('/', dbController.delete);

module.exports = router;