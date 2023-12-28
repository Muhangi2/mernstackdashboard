import productStats from "../models/productStats.js";
import products from "../models/products.js";

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