const router = require('express').Router();
const Workout = require('../models/workout');


// Get Route 
router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(Workout => {
    res.json(Workout);
  })
  .catch(err => {
    res.status(400).json(err);
  }); 
});
router.post("/api/workouts", (req, res) => {
  Workout.find({})
  .then(Workout => {
    res.json(Workout);
  })
  .catch(err => {
    res.status(400).json(err);
  }); 
}); 
router.put("/api/workouts/:id", (req, res) => {
  Workout.find({})
  .then(Workout => {
    res.json(Workout);
  })
  .catch(err => {
    res.status(400).json(err);
  }); 
}); 
//Aggregate function for get routes when combining data from get routes for updating workout
module.exports = router;