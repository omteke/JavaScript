const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('welcome to about page')
})

app.get('/contact', (req, res) => {
  res.send('contact details:9518313014')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
