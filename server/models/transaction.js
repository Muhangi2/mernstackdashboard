import mongoose from "mongoose"

const transactionSChema=new mongoose.Schema({
    
     userId:String,
     cost:String,
     products:{
        type:[mongoose.Types.ObjectId],
        of:Number,
     }
},{
    timestamps:true
})
export default mongoose.model("transaction", transactionSChema)