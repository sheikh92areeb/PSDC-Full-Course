const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.path)
  res.send('Hello World!')
})

app.get('/users{/:id}', (req, res) => {
  const id = req.params.id 
  console.log(id)
  res.send('Users Data')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})