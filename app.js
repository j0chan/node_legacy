const express = require('express')
const app = express()

// localhost:3000 을 통해 접속
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3030)