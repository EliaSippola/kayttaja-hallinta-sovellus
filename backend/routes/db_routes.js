const exp = require('express');
const router = exp.Router();
const dbController = require('../controllers/db_controller.js');

// get all users
router.get('/', dbController.getAll);

// post user
router.post('/', dbController.create);

// update user
router.put('/', dbController.update);

// delete user
router.delete('/', dbController.delete);

module.exports = router;