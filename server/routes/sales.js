import express from "express";
import { getSales } from "../controllers/sales.js";

  export const salesRoute=express.Router();

  salesRoute.get("/sales",getSales)