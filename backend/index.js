import dotenv from "dotenv";
dotenv.config();
import dns from "dns";
import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true // so that we don't get token not found error
}));
//middleware 
app.use("/api/auth",authRouter)
const port = process.env.PORT||5000;



dns.setServers(['8.8.8.8','1.1.1.1']);
connectDB();


app.listen(port,()=>{
    console.log(`sever is running on ${port}`);

});



