const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
app.get('/test', (req, res) => {
  res.send('ini route test')
})
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
