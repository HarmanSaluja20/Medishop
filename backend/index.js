const express = require('express')
const app = express()
const port = 5000
const mongoo = require("./db");
mongoo();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Router/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})