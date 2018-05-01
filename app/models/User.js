'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: String,
  email: String,
  tipe_user: {
    type: String,
    enum: [
      'unverified',
      'user',
      'user_premium'
    ],
    default: 'user'
  },
  nama: String,
  password: String,
  jenis_kelamin: {
    type: String,
    enum: ['F', 'M']
  },
  foto_profile: String,
  followers: Number,
  following: Number,
}, {
  timestamps: true 
})

const User = mongoose.model('User', userSchema);

module.exports = User;
