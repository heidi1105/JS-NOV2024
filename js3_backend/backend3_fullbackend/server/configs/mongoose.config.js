import { connect } from 'mongoose';
// get the environment variable : MONGODB_URI from .env
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'productDB', // update the db name for your project
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;

