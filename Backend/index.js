import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './controller/route/user.route.js'
import cors from 'cors'

const app = express()
dotenv.config();

app.use(express.json())
const PORT = process.env.PORT || 5001

app.use(cors());

try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB successfully");
  
} catch (error) {
  console.error("Error connecting to MongoDB:", error.message);
  
}

app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})