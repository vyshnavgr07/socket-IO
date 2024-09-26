const express=require('express');
const messageRouter=express.Router()
const messageController=require('../controller/messageController')

messageRouter.post('/message',messageController.sentmessage)
.get('/message',messageController.getMessage)












module.exports=messageRouter;