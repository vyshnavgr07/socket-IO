const express=require('express');
const userRouter=express.Router();
const userController=require('../controller/user')


userRouter.post('/signup',userController.userSignup)














module.exports=userRouter;