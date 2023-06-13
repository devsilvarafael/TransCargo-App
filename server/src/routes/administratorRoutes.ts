import express from "express";
import {getAllAdministrators} from "../controllers/AdministratorController";

const administratorRouter = express.Router();

administratorRouter.use('/admins', getAllAdministrators)

export default administratorRouter;