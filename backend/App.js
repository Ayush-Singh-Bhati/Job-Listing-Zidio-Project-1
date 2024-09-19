import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure env file
dotenv.config({ path: "./config/.env" })




// connect backend with frontend by cors
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
// }))


export default app