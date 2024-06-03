import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog",blogRouter);
const port = process.env.PORT || 5000;


//app.use("/api/user",router);
mongoose.connect(process.env.DATABASE)
.then(()=>app.listen(port))
.then(()=>console.log("Connected to database and listining to port 5000"))
.catch((err) =>console.log(err));

