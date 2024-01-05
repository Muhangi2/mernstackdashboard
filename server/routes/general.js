import express from "express";
import { getDashboardStats, getUser } from "../controllers/general.js";

 const  generalRoute=express.Router();

 generalRoute.get("/user/:id",getUser)
 generalRoute.get("/dashboard",getDashboardStats)

  export default  generalRoute