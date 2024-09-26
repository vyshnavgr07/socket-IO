const app=require('./app')
const mongoose=require('mongoose');
const http=require('http')

mongoose.connect("mongodb://127.0.0.1:27017/Evo-Chat")
.then(()=>console.log('db conected'))
.catch((err)=>console.log(err))



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