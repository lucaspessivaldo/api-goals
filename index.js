const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./src/routes/goalRoutes'))

app.get('/', (req, res) => {
  res.json({ serverStatus: "Ok" })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})