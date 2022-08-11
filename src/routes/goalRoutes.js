const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', setGoal)

router.delete('/:id', deleteGoal)
router.put('/:id', updateGoal)

module.exports = router