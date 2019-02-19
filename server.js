const express = require('express')
let app = express()
let server = require('http').Server(app);
let io = require('socket.io')(server);


const PORT = process.env.PORT || 3002;


// Start the server
server.listen(PORT, () => {
  console.log('Running server on 127.0.0.1:' + PORT);
});


io.on('connection', (socket) => {
  console.log(socket.id);
});


