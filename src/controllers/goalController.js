const Goal = require('../models/goalModel')

//GET
const getGoals = async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
}

//POST
const setGoal = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Need to add a text on the body"
    })
  }

  if (!req.body.user) {
    return res.status(400).json({
      message: "Need to add the user id"
    })
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.body.user
  })

  res.status(200).json(goal)
}

//PUT
const updateGoal = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: "Need to add a id on the url parameters"
    })
  }

  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    return res.status(400).json({ message: "Goal not found" })
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body)

  res.status(200).json(updatedGoal)
}

//DELETE
const deleteGoal = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: "Need to add a id on the url parameters"
    })
  }

  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    return res.status(400).json({ message: "Goal not found" })
  }

  goal.remove()

  res.status(200).json({ id: req.params.id })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}