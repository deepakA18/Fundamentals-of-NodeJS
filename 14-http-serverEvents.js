const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('http server without using event emittor');
// })

//Using Event Emittor API

const server = http.createServer();
//emits request event
//subscribes to it/ listens for it/ responds to it.
server.on('request',(req,res)=>{
    res.end('http Server uses Event emitter api in the background');
});

server.listen(5000);