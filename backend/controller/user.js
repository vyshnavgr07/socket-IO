const User=require('../models/userSchema');



const userSignup=async(req,res)=>{
    try {
        const data=req.body;
        console.log(data,"dattaa")
        const user=User({...data})
        await user.save();
       return  res.status(201).json({
            message:'user created succesfully',user
        })
    } catch (error) {
        console.log(error,"err")
    }
}

const userLogin=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const existUser=await User.findOne({email});
        if(!existUser){
            return  res.status(400).json({
                message:'user not exist'
            })
         
        }
        if(existUser.password=password){
            return  res.status(201).json({
                message:'user created succesfully',existUser
            })
        }
     
    
    } catch (error) {
        console.log(error,"err")
    }
}


const getUser=async (req,res)=>{
    try {
     
        const existUser=await User.find();
        return  res.status(201).json({
                message:'user created succesfully',existUser
            })
       
    
    } catch (error) {
        console.log(error,"err")
    }
}








    
module.exports={userSignup,userLogin,getUser}