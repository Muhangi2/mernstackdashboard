import express from "express";
import { getAdminUsers } from "../controllers/management.js";

export const managementRoute=express.Router();
managementRoute.get("/admin",getAdminUsers);