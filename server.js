import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import index from './routes/index.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

// Load environment variables from .env file
dotenv.config();

const app = express();

// MongoDB connection URI
const MONGODB_URI = process.env.MONGO_URL;

// Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1); // Exit the process on connection failure
});
app.use(cors())
app.use(express.json());

// Define a route
app.use('/',index);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
