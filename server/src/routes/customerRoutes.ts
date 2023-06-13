import express from "express";
import {getAllCustomers} from "../controllers/CustomerController";

const customerRouter = express.Router();

customerRouter.use("/customers", getAllCustomers);

export default customerRouter;