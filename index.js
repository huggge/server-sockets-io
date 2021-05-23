var express = require('express')
var socket = require('socket.io')

// App setup
var app = express()
var server = app.listen(1337, () => console.log('listening on port 1337'))

app.use(express.static('public'))

// Socket setup
var io = socket(server)

io.on('connection', (socket) => {
  console.log('made socket connection')
  console.log('idet', socket.id)

  socket.on('message', (data) => {
    data.id = socket.id
    console.log()
    // socket.broadcast.emit('message', data,)
    io.emit('message', usersOnline)
  })

  socket.on('login', (data) => {
    console.log('login')
    data.id = socket.id
    console.log(data)
       io.emit('isOnline', data)
    // socket.broadcast.emit('isOnline', data)
  })

})
