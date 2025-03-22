import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import postRouter from './routes/post.route.js'
import connectionDB from './utils/dbConnect.js';

dotenv.config();
connectionDB();

const app = express()

app.use(express.json()); // Middleware for JSON parsing
app.use(cors()); // Enable CORS

// API Routes
app.use("/api/posts", postRouter);

app.listen(3000,() => {
    console.log("Your seerver is damchaak!")
})