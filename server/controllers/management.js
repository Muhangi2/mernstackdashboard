import mongoose from "mongoose";
import User from "../models/User.js";
import transaction from "../models/transaction.js";

export const getAdminUsers=async(req,res)=>{
    try {
        const admins=await User.find({role:"admin"}).select("-password");
        res.status(200).json(admins)
    } catch (error) {
      res.status(500).json({message:error.message})   
    }
}
export const userPerformance=async(req,res)=>{
    
    try {
      const { id } = req.params;

      const userWithStats = await User.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "affiliatestats",
            localField: "_id",
            foreignField: "userId",
            as: "affiliateStats",
          },
        },
        { $unwind: "$affiliateStats" },
      ]);
  
      const saleTransactions = await Promise.all(
        userWithStats[0].affiliateStats.affiliateSales.map((id) => {
          return transaction .findById(id);
        })
      );
      const filteredSaleTransactions = saleTransactions.filter(
        (transaction) => transaction !== null
      );
  
      res
        .status(200)
        .json({ user: userWithStats[0], sales: filteredSaleTransactions });
    } catch (error) {
      res.status(404).json({message:error.message})
    }
}