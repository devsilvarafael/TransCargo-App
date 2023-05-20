import express from "express";
import cors from 'cors';

import userRouter from "./routes/userRoutes";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());


app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});