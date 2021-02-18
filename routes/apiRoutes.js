const router = require('express').Router();
const Workout = require('../models/workout');

router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then((Workout) => {
    res.json(Workout)
    })
  .catch((err) => {
    res.json(err);
  });
});
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((Workout) => {
    res.json(Workout)
    })
  .catch((err) => {
    res.json(err);
  });
});
router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true})
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    }); 
});

//Aggregate function for get routes when combining data from get routes for updating workout
module.exports = router;