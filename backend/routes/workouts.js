const express = require("express");

const router = express.Router();
//Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});
//Get single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout" });
});

// Post a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});
module.exports = router;
