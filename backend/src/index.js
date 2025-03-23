import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import { connetDB } from "./lib/db.js"



dotenv.config()
const app = express()

app.use(express.json())

app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log("server running on port: " + PORT )
    connetDB();
})