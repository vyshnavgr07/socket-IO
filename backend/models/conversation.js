const mongoose=require('mongoose');




const conversationSchema=mongoose.Schema({
    participant:[{
        userId:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    messages:[{
        messageid:mongoose.Schema.Types.ObjectId,
        ref:"Message"

    }]

})


const Conversation=mongoose.model('Conversation',conversationSchema)


module.exports=Conversation