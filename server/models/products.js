import mongoose from "mongoose"

const productSChema=new mongoose.Schema({
    productid:String,
    name:String,
    price:Number,
    description:String,
    category:String,
    rating:Number,
    supply:Number,
},{
    timestamps:true
})
export default mongoose.model("Product",productSChema)