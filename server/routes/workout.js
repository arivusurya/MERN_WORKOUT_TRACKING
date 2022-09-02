const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const {
  createWorkout,
  getallworkout,
  singleworkout,
  deleteworkout,
  updateworkout,
} = require("../controllers/workoutcontroller");

router.get("/", getallworkout);
router.get("/:id", singleworkout);

router.post("/", createWorkout);
router.delete("/:id", deleteworkout);
router.patch("/:id", updateworkout);
module.exports = router;
