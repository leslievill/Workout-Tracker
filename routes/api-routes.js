const express = require('express');
const router = express.Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);

    })
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);

    })

});

router.put("/api/workouts/:id", ({body, params}, res) => {
    res.json({
        message: 'PUT /api/workouts/:id'
    })
});

module.exports = router;
