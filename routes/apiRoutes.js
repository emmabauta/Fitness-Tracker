const router = require('express').Router();
const Workout = require('../models/workout');

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((Workout) => {
    res.json(Workout)
    })
  .catch((err) => {
    res.json(err);
  });
});
router.put('/api/workouts/:id', ({ body, params}, res) => {
  console.log(body);
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}})
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    })
  });

  router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
    .then((Workout) => {
      res.json(Workout)
      })
    .catch((err) => {
      res.json(err);
    });
  });
//Aggregate function for get routes when combining data from get routes for updating workout
module.exports = router;