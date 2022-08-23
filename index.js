const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./src/routes/goalRoutes'))
app.use('/api/user', require('./src/routes/userRoutes'))

app.get('/', (req, res) => {
  res.json({ serverStatus: "Ok" })
})

mongoose.connect(process.env.MONGODB_LINK)
  .then(() => {
    console.log('Database OK')
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })