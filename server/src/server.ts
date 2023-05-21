import express from "express";
import cors from 'cors';

import userRouter from "./routes/userRoutes";
import auth from "./routes/auth";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());


app.use('/api', userRouter);
app.use('/api', auth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});