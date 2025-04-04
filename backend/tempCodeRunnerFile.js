import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import config from './config.js';
import userRouter from './routers/userRouter.js';

// Initialize Express
const app = express();
const PORT = config.port;

// Enable CORS
app.use(cors({
  origin: '*',  // Allow all origins (for testing)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

// Middleware to handle preflight requests
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// Enable JSON parsing
app.use(express.json());

// API Routes
app.use('/api/users', userRouter);

// Start Server
app.listen(PORT, () => {
});
