import mongoose from "mongoose";
import { Workout } from "../models/workoutModel.js";

export const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

export const getWorkout = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
};

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

export const deleteWorkout = (req, res) => {
  res.json({ mssg: "Delete a workout" });
};

export const updateWorkout = (req, res) => {
  res.json({ mssg: "Update a workout" });
};
