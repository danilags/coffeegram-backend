const User = require('../models/User');

const UserController = {}

UserController.getAllUsers = async (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.send({error: err})
    } else {
      res.send({message: 'Success get all users!', data: users})
    }
  })
}

UserController.createUser = async (req, res, next) => {
  console.log('TEST 2', req.body);
  try {
    // User.findOne({ email: req.body.emailn }, (err, user) => {
    //   if (err) {
    //     res.send({error: err})
    //   } else if (user) {
    //     res.send({error: 'Email is already exist'})
    //   } 
    // })
    const newUser = new User({
      _id,
      email: req.body.email,
      tipe_user: req.body.tipe_user,
      nama: req.body.nama,
      password: req.body.password,
      jenis_kelamin: req.body.jenis_kelamin,
      foto_profile: '',
      followers: 0,
      following: 0,
    })

    newUser.save((err, user) => {
      if (err) {
        res.send({error: err})
      } else {
        res.send({message: 'Success', data: user})
      }
    })
  } catch (error) {
    res.send({error})
  }
}

module.exports = UserController;
