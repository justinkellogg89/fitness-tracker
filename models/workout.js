const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercises: [
    {
    //   type: Schema.Types.ObjectId,
    //   ref: "Book"
    }
  ]
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;