const app=require('./app')

const http=require('http')

const server=http.createServer(app);
const io=require('socket.io')(server,{
    cors: {
        origin: "*",
    }
})

io.on("connection", (socket) => {
    console.log("socket is active to be connected");

    socket.on("chat",(payload)=>{
        console.log('whats payload',payload);
        io.emit('chat',payload)
        })
  });



 server.listen(4000,()=>{
    console.log('server is running on: 4000');
})