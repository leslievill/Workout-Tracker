const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Number

    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter your exercise name"
            },
            duration: {
                type: Number,
                required: "Enter your exercise duration in minutes"
            },
            distance: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            weight: {
                type: Number
            }
        }
    ]
},
);


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 