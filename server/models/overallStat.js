import mongoose from "mongoose"

const overallStatSChema=new mongoose.Schema({
    
     totalCustomers:Number,
     yearlySalesTotal:Number,
     yearlTotalSolidUnits:Number,
     year:Number,
     monthlyData:[
         { 
            month:String,
            totalSales:Number,
            totalUnits:Number
        }
     ],
     dailyData:[
         {
            date:String,
            totalSales:Number,
            totalUnits:Number,
         }
     ],
     salesByCategory:{
        type:Map,
        of:Number
     }
},{
    timestamps:true
})
export default mongoose.model("overallStats", overallStatSChema)