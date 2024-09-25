const User=require('../models/userSchema');



const userSignup=async(req,res)=>{
    try {
        const data=req.body;
        const user=User({...data})
        await user.save();
        res.status(201).json({
            message:'user created succesfully'
        },user)
    } catch (error) {
        console.log(error,"err")
    }
}






module.exports={userSignup}