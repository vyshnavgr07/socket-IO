const express=require('express');
const userRouter=express.Router();
const userController=require('../controller/user')


userRouter.post('/signup',userController.userSignup)
.post('/login',userController.userLogin)
.get('/user',userController.getUser)














module.exports=userRouter;