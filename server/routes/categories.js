const express = require("express");
const router = express.Router();
const { categories } = require("../data/mockData");

// GET /api/categories
router.get("/", (req, res) => {
  res.json({ success: true, data: categories, total: categories.length });
});

// GET /api/categories/:id
router.get("/:id", (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ success: false, message: "Catégorie introuvable" });
  res.json({ success: true, data: category });
});

module.exports = router;
