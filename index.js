const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', function (req, res) {
  res.send([
    'user1',
    'user2',
    'user3'
  ])
})

app.post('/users', function (req, res) {
  res.send('Юзер добавлен')
})

app.get('/admin', function (req, res) {
  res.send('не хватает прав доступа')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})