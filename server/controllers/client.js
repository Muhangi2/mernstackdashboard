import User from "../models/User.js";
import productStats from "../models/productStats.js";
import products from "../models/products.js";
import * as flatted from "flatted";
import transaction from "../models/transaction.js";
import getCountryIso3 from "country-iso-2-to-3"


export const getProducts=async(req,res)=>{
    try {
        const productss=await products.find();
        const productWithStats=await Promise.all(
          productss.map(async(product)=>{
            const stat=await productStats.find({
                productId:product._id,
            });
            return {
                ...product._doc,stat
            }
          })
        )
       res.status(200).json(productWithStats);

    } catch (error) {
         res.status(400).json({message:error.message});
    }
}
export const getCustomers=async(req,res)=>{
  try {
    const customers = await User.find({ role: "user" }).select("-password")
    res.status(200).json(customers);
    

  } catch (error) {
       res.status(500).json({message:error.message});
  }
}
export const getTransactions=async(req,res)=>{
  try {
    //this is how the sorting in th frontend should look like 
    const {page=1,pageSize=20,sort=null,search=""}=req.query

    //formatted sort shoild look like this 
    const generateSort=()=>{
      const sortParsed=JSON.parse(sort);
      const sortFormatted={
        [sortParsed.field]:(sortParsed.sort="asc"? 1:-1),
      }
      return sortFormatted;
    }
    const sortFormatted=Boolean(sort)?generateSort():{};
    const transactions=await transaction.find({
      $or:[
        {cost:{$regex:new RegExp(search,"i")}},
        {userId:{$regex:new RegExp(search,"i")}}
      ]
    }).sort(sortFormatted).skip(page*pageSize).limit(pageSize)
    
//counting the number of documents
const total = await transaction.countDocuments({
  $or: [
    { name: { $regex: search, $options: "i" } },
    // { userId: { $regex: search, $options: "i" } },
    // Add more conditions as needed
  ]
});

  res.status(200).json({transactions,total})
  } catch (error) {
    res.status(200).json({
      message:error.message
    })
  }
}
export const getGeography=async(req,res)=>{
  try {
    const users = await User.find();
     const mappedlocations=users.reduce((acc,{country})=>{
      const countryISO3=getCountryIso3(country);
       
      if(!acc[countryISO3]){
        acc[countryISO3]=0;
      }
      acc[countryISO3]++;
       return acc;
     },{});
     const formattedLocations=Object.entries(mappedlocations).map(([country,count])=>{
      return {id:country,value:count};
       }
     );

    res.status(200).json(formattedLocations);
    
  } catch (error) {
       res.status(500).json({message:error.message});
  }
}