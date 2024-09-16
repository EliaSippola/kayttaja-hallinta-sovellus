const exp = require('express');
const router = exp.Router();
const dbController = require('../controllers/db_controller.js');

// get all users
router.get('/', dbController.getAll);

router.get('/:id', dbController.getOne);

// post user
router.post('/', dbController.create);

// update user
router.put('/:id', dbController.update);

// delete user
router.delete('/:id', dbController.delete);

//login
router.post('/login', dbController.login);

module.exports = router;