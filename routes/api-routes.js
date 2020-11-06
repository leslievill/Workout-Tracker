const express = require('express');
const router = express.Router();

router.get("/api/workouts", (req, res) => {
    res.json({
        message: 'Hello /api/workouts'
    })
});

router.post("/api/workouts", (req, res) => {
    res.json({
        message: 'POST /api/workouts'
    })
});

router.get("/api/workouts/range", (req, res) => {
    res.json({
        message: 'Hello /api/workouts'
    })
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    res.json({
        message: 'PUT /api/workouts/:id'
    })
});

module.exports = router;
