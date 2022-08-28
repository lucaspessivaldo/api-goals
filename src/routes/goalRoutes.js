const express = require('express')
const { authToken } = require('../middleware/authToken')
const router = express.Router()

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

router.get('/', authToken, getGoals)
router.post('/', authToken, setGoal)

router.delete('/:id', authToken, deleteGoal)
router.put('/:id', authToken, updateGoal)

module.exports = router