import User from "../models/User.js";
import transaction from "../models/transaction.js";
import overallStat from "../models/overallStat.js";

export const getUser=async(req,res)=>{
    try {
        const id=req.params.id

      const user=await  User.findById(id);
     res.status(200).json(user)

    } catch (error) {
         res.status(404).json({message:error.message})
    }
}

export const getDashboardStats=async(req,res)=>{
    try {
    const currentMonth="November"
    const currentYear=2021
    const currentDay="2021-11-15"

  const transactions=await transaction.find().limit(50).sort({createdOn:-1});
  //overallstats
  const overallStats=await overallStat.find({year:currentYear});
  const { 
        totalCustomers,
        yearlySalesTotal,
        yearlTotalSolidUnits,
        monthlyData,
        dailyData,
   }=overallStats[0];

   const thisMonthStats=overallStats[0].monthlyData.find(({month})=>{return month===currentMonth});

   const todayStats=overallStats[0].dailyData.find(({date})=>{return date===currentDay});
   
     
     res.status(200).json({
        transactions,
        totalCustomers,
        yearlySalesTotal,
        yearlTotalSolidUnits,
        monthlyData,
        dailyData,
        thisMonthStats,
        todayStats
     })

    } catch (error) {
         res.status(404).json({message:error.message})
    }
}