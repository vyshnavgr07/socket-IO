const express=require('express');
const cors=require('cors')
const app=express();
app.use(express.json())
const userRoutes=require('./routes/userRoutes')
const messageRoutes=require('./routes/messageRoutes')
app.use(cors())

app.use(userRoutes)
app.use(messageRoutes)







    

    












module.exports=app;