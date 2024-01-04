import express from "express";
import { getAdminUsers, userPerformance } from "../controllers/management.js";

export const managementRoute=express.Router();
managementRoute.get("/admin",getAdminUsers);
managementRoute.get("/affiliates/:id",userPerformance);