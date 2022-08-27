const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: [true, 'Name is required'],

  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
})

module.exports = User