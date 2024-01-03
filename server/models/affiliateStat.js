import mongoose from "mongoose"

const affiliateStatsSchema=new mongoose.Schema({
    
   userId:{type:mongoose.Types.ObjectId},
   affiliateSales:{
    type:[mongoose.Types.ObjectId],
    ref:"transaction"
   }
},{
    timestamps:true
})
export default mongoose.model("affiliateStats", affiliateStatsSchema)