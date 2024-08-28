const express = require("express");
const salesRouter = express.Router();
const Overview = require("../models/OverallStats");

salesRouter.get("/sales", async (req, res, next) => {
  try {
    const overviewAllStats = await Overview.find();

    res.status(200).json(overviewAllStats[0]);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

module.exports = salesRouter;
