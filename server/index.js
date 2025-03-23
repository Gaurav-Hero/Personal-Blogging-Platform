import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import postRouter from './routes/post.route.js'
import connectionDB from './utils/dbConnect.js';

dotenv.config();
connectionDB();

const app = express()

app.use(express.json()); 
app.use(cors());

app.use("/api/posts", postRouter);

const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`Your seerver is damchaak! @http://localhost:${port}/api/posts`);
})