const express = require('express')
const router = express.Router()
const {
  userRegister,
  userLogin
} = require('../controllers/userController')

//router /api/user/register
router.post('/register', userRegister)
router.post('/login', userLogin)

module.exports = router