import express from "express";
import cors from 'cors';

import userRouter from "./routes/userRoutes";
import auth from "./routes/auth";
import truckRouter from "./routes/truckRoutes";
import driverRouter from "./routes/driverRoutes";
import customerRouter from "./routes/customerRoutes";
import administratorRouter from "./routes/administratorRoutes";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());


app.use('/api', [userRouter, administratorRouter, truckRouter, driverRouter, customerRouter, auth]);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});