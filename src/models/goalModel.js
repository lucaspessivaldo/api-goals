const mongoose = require('mongoose')

const Goal = mongoose.model('Goal', {
  text: String
})

module.exports = Goal