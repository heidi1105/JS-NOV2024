// 1. import dependencies
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './configs/mongoose.config.js'; // 1. comment it before mongoose.config is done
import router from "./routes/product.routes.js" // 2. comment it before routes, controller, model is done

// 2. configure app
const app = express();
app.use(express.json(), cors()); 
dotenv.config(); // to enable .env 
const PORT = process.env.PORT
dbConnect(); // 1. comment it before mongoose.config is done

// 3. routes & logic
app.use("/api", router); // 2. comment it before routes, controller, model is done


// 4. listen to the port
app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));