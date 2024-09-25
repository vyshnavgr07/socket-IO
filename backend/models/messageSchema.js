const mongoose=require('mongoose')

const messageSchema=mongoose.Schema({
    sender:{
        userId:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

   reciever:{
        userId:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    messages:{
        type:String,
        required:true
    }
})
const Message=mongoose.model("Message",messageSchema)

module.exports=Message