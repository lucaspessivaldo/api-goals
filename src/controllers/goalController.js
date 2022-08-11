const getGoals = async (req, res) => {
  res.status(200).json({ message: "get-goal" })
}

const setGoal = async (req, res) => {
  res.status(200).json({ message: "post-goal" })
}

const updateGoal = async (req, res) => {
  const id = req.params.id

  res.status(200).json({
    message: "put-goal",
    id: id
  })
}

const deleteGoal = async (req, res) => {
  const id = req.params.id

  res.status(200).json({
    message: "delete-goal",
    id: id
  })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}