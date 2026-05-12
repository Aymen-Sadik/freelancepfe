const express = require("express");
const router = express.Router();
const { topFreelancers } = require("../data/mockData");

// GET /api/freelancers
router.get("/", (req, res) => {
  const { category, minRating, maxPrice } = req.query;
  let result = [...topFreelancers];

  if (minRating) result = result.filter((f) => f.rating >= parseFloat(minRating));
  if (maxPrice) result = result.filter((f) => f.price <= parseInt(maxPrice));

  res.json({ success: true, data: result, total: result.length });
});

// GET /api/freelancers/:id
router.get("/:id", (req, res) => {
  const freelancer = topFreelancers.find((f) => f.id === parseInt(req.params.id));
  if (!freelancer) return res.status(404).json({ success: false, message: "Freelancer introuvable" });
  res.json({ success: true, data: freelancer });
});

module.exports = router;
