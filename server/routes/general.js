import express from "express";
import { getUser } from "../controllers/general.js";

 const  generalRoute=express.Router();

 generalRoute.get("/user/:id",getUser)

  export default  generalRoute