import express from "express";
import {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";
import requireAuth from "../middleware/requireAuth.js";

// require auth for all workout routes
const router = express.Router();

router.use(requireAuth);

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE  a new workout
router.patch("/:id", updateWorkout);

export default router;
