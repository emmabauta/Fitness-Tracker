const router = require('express').Router();
const Workout = require('../models/workout');


// Get Route 
router.get("/api/transaction", (req, res) => {
    Transaction.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
//Aggregate function for get routes when combining data from get routes for updating workout
module.exports = router;