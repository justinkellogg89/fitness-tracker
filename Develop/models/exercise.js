const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true
    },

  name: {
    type: String,
    trim: true,
    required: "Name is Required"
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