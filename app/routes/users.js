var express = require('express');
var router = express.Router();

const UserController = require('../controllers/user.controller');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
  .get('/', UserController.getAllUsers)
  .post('/', UserController.createUser)

module.exports = router;
