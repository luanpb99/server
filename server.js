var express = require('express')
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)
var fs = require('fs');
app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('chat message', (message) => {
        console.log('Received message:', message);
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running `);
});