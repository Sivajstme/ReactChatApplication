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

    socket.on('join',({name, room}) => {
        console.log(name, room);}
        
    )
    socket.on('disconnect',()=>{
            console.log('User Just disconnected');
    })
})

app.use(router);


server.on('listening', ()=>{
    console.log(`Server has running on port ${PORT}`);
});

server.listen(PORT);


//kill -9 $(lsof -t -i:3000);