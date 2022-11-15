const router = require('express').Router();
const controller = require('../controller/userController')

router
.get('/', controller.getAllUsers)
.get('/:id', controller.getUser)
.post('/', controller.createUser)
.put('/:id', controller.updateUser)
.delete('/:id', controller.deleteUser)
module.exports = router;