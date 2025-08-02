import dotenv from "dotenv";

import express from "express";
import { connectDB } from "./config/db.js";
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
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  });
