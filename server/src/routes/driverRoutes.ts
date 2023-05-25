import express from "express";
import { getAllDrivers } from "../controllers/DriverController";

const driverRouter = express.Router();

driverRouter.use("/drivers", getAllDrivers);

export default driverRouter;