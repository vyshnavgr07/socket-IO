const mongoose=require('mongoose')

const messageSchema=mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },                                                     
                                                                 
   reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    messages:{
        type:String,
        required:true
    }
})
const Message=mongoose.model("Message",messageSchema)

module.exports=Message