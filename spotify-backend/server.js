import express from 'express';
import cors from 'cors';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

const app = express();

connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://music-player-nezv.vercel.app/",  // allow only frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get('/', (req, res) => res.send("API Working"));

// ❌ Do not use app.listen() on Vercel
export default app;
