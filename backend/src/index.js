import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/connectDB.js";

import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // parse incoming JSON in req.body

// Routes
app.use("/api/auth", authRoutes);

// Connect DB and then start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  });
