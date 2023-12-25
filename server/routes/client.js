import express from "express";
import { getUser } from "../controllers/client.js";

 const clientRoute=express.Router();

 clientRoute.get("/user/:id",getUser)

  export default clientRoute 