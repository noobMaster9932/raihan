const express = require('express')
const testFunction = require('./test')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
app.get('/test', (req, res) => {
  const result = testFunction()

  res.send('ini route test ' + result)
})
app.get('/test/:parameter/:parameter2', (req, res) => {
  const p = req.params.parameter
  const s = req.params.parameter2
  const result = testFunction()

  res.send('ini route test ' + result + p +s)
})
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
