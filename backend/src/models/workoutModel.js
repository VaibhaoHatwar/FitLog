import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["strength", "cardio", "mobility", "flexibility", "other"],
      default: "strength",
    },
    intensity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    notes: {
      type: String,
      maxlength: 500,
      default: "",
    },
    workoutDate: {
      type: Date,
      default: Date.now,
    },
    caloriesBurned: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Workout = mongoose.model("Workout", workoutSchema);
