import express from "express";
import { getCustomers, getProducts, getTransactions } from "../controllers/client.js";


 const  clientRoute=express.Router();

 clientRoute.get("/product",getProducts)
 clientRoute.get("/customer",getCustomers)
 clientRoute.get("/transaction",getTransactions)

  export default  clientRoute