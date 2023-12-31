import overallStat from "../models/overallStat.js";

export const getSales=async(req,res)=>{
    try {
    
        const overallstats=await overallStat.find();
        res.status(200).json(overallstats[0])

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}