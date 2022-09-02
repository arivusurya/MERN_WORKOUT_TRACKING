const mongoose = require("mongoose");
const Workout = require("../model/workout.js");
// create workout
const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  next();
};
//get all workout
const getallworkout = async (req, res, next) => {
  try {
    let workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(error);
  }
};
// get single workout
const singleworkout = async (req, res, next) => {
  const id = req.params.id;
  try {
    let workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(405).json({ error: error.message });
  }
};
// delete workout
const deleteworkout = async (req, res, next) => {
  let id = req.params.id;
  if (!mongoose.Types.ObjectID(id)) {
    return res.status(405).json({ error: "No such workout" });
  }
  try {
    let workout = await Workout.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted", obj: workout });
  } catch (error) {
    res.status(404).json(error);
  }
};
// update workout
const updateworkout = async (req, res) => {
  let { id } = req.params;
  try {
    let upworkout = await Workout.findByIdAndUpdate(id, { $set: req.body });
    res.status(204).json();
  } catch (error) {
    res.status(422).json({ err: error.message });
  }
};

module.exports = {
  createWorkout,
  getallworkout,
  singleworkout,
  deleteworkout,
  updateworkout,
};
