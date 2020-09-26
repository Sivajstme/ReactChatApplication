const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket)=>{
    console.log('A user joined the connection ');

    socket.on('disconnect',()=>{
            console.log('User Just disconnected');
    })
})

app.use(router);


server.listen(PORT, ()=>{
    console.log(`Server has running on port ${PORT}`);
});
