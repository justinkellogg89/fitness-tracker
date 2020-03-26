const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date
  },

  exercises: {
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
  }
})

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;