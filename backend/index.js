const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
var dgram = require('dgram');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors());
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', (socket)=>{
  socket.on('ctrl', (keyPressed) => {
    console.log("input key",keyPressed);
    io.emit('ctrl', keyPressed);
    console.log("send direction",keyPressed);
  })
});  
http.listen(4000, function(){
  console.log(`listening on *:4000`);
});