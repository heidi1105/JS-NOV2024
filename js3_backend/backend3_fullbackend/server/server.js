// 1. import dependencies
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './configs/mongoose.config.js';
import router from "./routes/product.routes.js"

// 2. configure app
const app = express();
app.use(express.json(), cors()); 
dotenv.config(); // to enable .env 
const PORT = process.env.PORT
dbConnect();

// 3. routes & logic
app.use("/api", router); 


// 4. listen to the port
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));