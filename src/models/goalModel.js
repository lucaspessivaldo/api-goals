const mongoose = require('mongoose')

const Goal = mongoose.model('Goal', {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: String
})

module.exports = Goal