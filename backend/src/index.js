import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import { connetDB } from "./lib/db.js"
import cors from "cors";


dotenv.config()
const app = express()

app.use(express.json())

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"]; // Add all possible frontend origins

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true, // Allow cookies
    })
);

app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log("server running on port: " + PORT )
    connetDB();
})