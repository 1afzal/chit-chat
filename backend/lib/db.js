import mongoose from "mongoose"; //const mongoose = require("mongoose");

//create a function to connect to the DB and to be callled later in the index.js file
export const connectDB = async () => { //since DB accessing so it'll be an async function
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit process with failure
    }
}