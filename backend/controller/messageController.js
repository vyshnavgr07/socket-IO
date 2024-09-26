const Message=require('../models/messageSchema')

const sentmessage=async (req,res)=>{
    try {
        const {sender, reciever, messages}=req.body
       const message=Message({sender,reciever,messages})
       await message.save();
          return res.status(200).json({message:"succesfully message sent",message})
    } catch (error) {
        console.log(error,error)
        return res.status(400).json({message:"internal error occured"})
    }
}


const getMessage=async(req,res)=>{
    try {
        const message=await Message.find()
        return res.status(200).json({message:"succesfully fetched message ",message})
    } catch (error) {
        console.log(error,error)
        return res.status(400).json({message:"internal error occured"})
    }
}






module.exports={sentmessage,getMessage}
