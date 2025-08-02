import { Workout } from "../models/workoutModel.js"

export const getWorkouts = (req, res) => {
  res.json({ mssg: "Get all workouts" });
};

export const getWorkout = (req, res) => {
  res.json({ mssg: "Get a  single workout" });
};

export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

export const deleteWorkout = (req, res) => {
  res.json({ mssg: "Delete a workout" });
};

export const updateWorkout = (req, res) => {
  res.json({ mssg: "Update a workout" });
};
