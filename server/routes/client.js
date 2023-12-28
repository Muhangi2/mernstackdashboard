import express from "express";
import { getProducts } from "../controllers/client.js";


 const  clientRoute=express.Router();

 clientRoute.get("/product",getProducts)

  export default  clientRoute