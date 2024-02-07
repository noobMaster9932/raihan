const express = require('express')

const port = 8080

const helmet = require('helmet')
const compression = require('compression')
const logger = require('morgan')
const cors = require('cors')
const { masterUserRouter } = require('./router')
const { connectToDatabase } = require('./database/connections')
// for logging router
const app = express()
app.use(helmet())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(compression())

app.get('/user', masterUserRouter.getAlluser)
app.get('/user/:username', masterUserRouter.getUserByUserName)
app.get('/user/raihan', masterUserRouter.getRaihan)
connectToDatabase()
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
