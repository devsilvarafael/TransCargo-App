import express from "express";
import { createTruck, deleteTruck, getAllTrucks } from "../controllers/TruckController";

const truckRouter = express.Router();

truckRouter.get("/trucks", getAllTrucks);
truckRouter.post("/trucks", createTruck);
truckRouter.delete("/trucks/:id", deleteTruck)

export default truckRouter;