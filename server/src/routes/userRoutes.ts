import express from "express";
import { createUser, deleteUser, getAllUsers } from "../controllers/UserController";

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users', createUser);
userRouter.delete(`/users/:id`, deleteUser)


export default userRouter;