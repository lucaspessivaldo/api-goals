const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Required all data - [name, email, password]'
    })
  }

  res.status(200).json({
    message: 'Register page',
    data: req.body
  })
}

module.exports = {
  userRegister
}