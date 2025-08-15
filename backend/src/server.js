import dotenv from "dotenv";

import express from "express";
import { connectDB } from "./config/db.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// create express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// handles all workout-related API endpoints
app.use("/api/workouts", workoutRoutes);
// handles all user-related API endpoints
app.use("/api/user", userRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

// start the server
const PORT = process.env.PORT || 5000;

// connect to DB
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
