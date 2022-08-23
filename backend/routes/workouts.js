const express = require("express");
const {
  deleteWorkout,
  updateWorkout,
  getWorkouts,
  getWorkout,
  createWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);
//Get single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);
module.exports = router;
