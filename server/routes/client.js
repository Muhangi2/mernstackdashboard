import express from "express";
import { getCustomers, getProducts } from "../controllers/client.js";


 const  clientRoute=express.Router();

 clientRoute.get("/product",getProducts)
 clientRoute.get("/customer",getCustomers)

  export default  clientRoute