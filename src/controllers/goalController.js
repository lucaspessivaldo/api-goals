const Goal = require('../models/goalModel')

//GET
const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.token.id })

  res.status(200).json(goals)
}

//POST
const setGoal = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Need to add a text on the body"
    })
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.token.id
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

  if (!goal || goal.user.toString() !== req.token.id) {
    return res.status(400).json({ message: "Goal not found" })
  }

  // const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body)
  goal.text = req.body.text
  const updatedGoal = await goal.save()

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

  if (!goal || goal.user.toString() !== req.token.id) {
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