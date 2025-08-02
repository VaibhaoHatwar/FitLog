import mongoose from "mongoose";
import { Workout } from "../models/workoutModel.js";

// GET /api/workouts → fetch all workouts, newest first
export const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// GET /api/workouts/:id → fetch single workout by ID
export const getWorkout = async (req, res) => {
  const { id } = req.params;

  // validate ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  // if not found
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// POST /api/workouts → create a new workout
export const createWorkout = async (req, res) => {
  const {
    title,
    reps,
    load,
    category,
    intensity,
    notes,
    workoutDate,
    caloriesBurned,
  } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
      category,
      intensity,
      notes,
      workoutDate,
      caloriesBurned,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE /api/workouts/:id → delete workout by ID
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// PATCH /api/workouts/:id → update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    {new: true}
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  // return updated workout (Note: returns old doc unless you pass {new: true})
  res.status(200).json(workout);
};
