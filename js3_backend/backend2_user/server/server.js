// 1. import dependencies
import express from "express";
// import router from "./routes/user.routes.js";
import router from "./routes/user.routes2.js";

// 2. configure app
const app = express();
const port = 8000;
app.use(express.json()); // allow json object to be received in the request

// 3. routes & logic
app.use("/api", router); // adding prefix for all the routes to include "/api"


// 4. listen to the port
app.listen(port, ()=>console.log(`Listening on port: ${port}`));