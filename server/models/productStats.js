import mongoose from "mongoose"

const productStatSChema=new mongoose.Schema({
    
     productId:String,
     yearlySalesTotal:Number,
     yearlTotalSolidUnits:Number,
     year:Number,
     monthlyData:[
         { month:String,totalSales:Number,totalUnits:Number}
     ],
     daily:[
         {
            data:String,
            totalSales:Number,
            totalUnits:Number,
         }
     ],
},{
    timestamps:true
})
export default mongoose.model("ProductStat", productStatSChema)