const express = require('express')
const path = require('path')
const cors = require('cors')
const router = require('./routes')

const app = express()

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, '..', 'client/build')))
app.use(express.static('public'))
app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/build', 'index.html'))
})

// const host = '0.0.0.0'
const host = 'localhost'
const port = process.env.PORT || 5000

app.listen(port, host, () => {
  console.log('server started on port ', port)
})
