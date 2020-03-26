const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  type: {
      type: String,
      trim: true,
      required: true
  },

  weight: {
      type: Number,
      required: true
  },

  sets: {
      type: Number,
      required: true
  },

  reps: {
      type: Number,
      required: true
  },

  duration: {
      type: Number
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;