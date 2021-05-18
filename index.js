var express = require('express');
const { emit } = require('nodemon');
var socket = require('socket.io');


// App setup
var app = express();
var server = app.listen(1337, () => console.log("listening on port 1337"));


app.use(express.static('public'))

// Socket setup
var io = socket(server);

io.on('connection', (socket) => {
    console.log("made socket connection")
    console.log("idet", socket.id)
    
    socket.on("message", (data) => {
        console.log("datta", data)
        socket.broadcast.emit('message', data)
    })

})