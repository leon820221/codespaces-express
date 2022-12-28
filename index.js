const express = require('express')
const app = express()
const port = 3000

const stuList = [
  {
    id:'001',
    name: 'Jack',
    age: 22,
    gender: 'Male',
    hobby: 'Boxing'
  },
  {
    id:'002',
    name: 'Lucy',
    age: 20,
    gender: 'Female',
    hobby: 'Drawing'
  }
]

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  next()
})

app.get('/', (req, res) => {
  res.send(stuList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
