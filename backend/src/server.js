import dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
// Handles all workout-related API endpoints
app.use("/api/workouts", workoutRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

// Start the server
const PORT = process.env.PORT || 5000;

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen to requests
    app.listen(PORT, () => {
      console.log(`✅ Connected to db and listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
