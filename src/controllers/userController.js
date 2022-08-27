const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

//User Register - /api/user/register
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Required all data - [name, email, password]'
    })
  }

  const userDB = await User.findOne({ name: name })
  const emailDB = await User.findOne({ email: email })

  const hash = await bcrypt.hash(password, 10)

  if (userDB) {
    return res.status(400).json({
      message: 'User name already exist'
    })
  }

  if (emailDB) {
    return res.status(400).json({
      message: 'User email already exist'
    })
  }

  const creatUser = await User.create({
    name,
    email,
    password: hash
  })

  res.status(200).json({
    message: 'Register page',
    data: req.body,
    hash: hash,
    userDb: creatUser
  })
}

//User login - /api/user/login
const userLogin = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(400).json({
      message: "User does not exist"
    })
  }

  const isRighPassword = bcrypt.compareSync(password, user.password)

  res.status(200).json({ password: isRighPassword })

}

module.exports = {
  userRegister,
  userLogin
}