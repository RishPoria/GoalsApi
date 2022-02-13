const express = require('express')
const connectDB = require('./config/db.js')
const errorHandler = require('./middleware/errorMiddleware')
require('colors')
require('dotenv').config()

connectDB()

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use('/api/users', require('./routes/userRoutes.js'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}...`.blue)
})