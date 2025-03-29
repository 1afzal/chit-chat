import express from "express";
import cors from "cors";
const app = express();
import authRoutes from './routes/auth.route.js'
import { connectDB } from "../lib/db.js";
import dotenv from "dotenv";
dotenv.config() //once we do this we can use .env 
const PORT = process.env.PORT

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log("Server is running on port",PORT);
    connectDB();
});
