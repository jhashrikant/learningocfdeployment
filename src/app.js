const express = require('express')

const app = express()
const PORT = 3001

const submitform = require('./controllers/submitform')

app.get("/", (req, res) => {
  res.send("hello world ocf deployment");
})

app.post('/api/submitform', submitform)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})