const jwt = require('jsonwebtoken')

function authToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(403).json({
      message: 'Required a token'
    })
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(400).json({
        message: "Token invalid"
      })
    }

    req.token = decoded
    next()
  })
}
module.exports = {
  authToken
}