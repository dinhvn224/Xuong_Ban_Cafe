import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/databases";

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(morgan("dev"))

app.listen(process.env.PORT,()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
})

