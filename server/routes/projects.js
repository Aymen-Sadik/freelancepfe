const express = require("express");
const router = express.Router();
const { projects } = require("../data/mockData");

// GET /api/projects
router.get("/", (req, res) => {
  const { type } = req.query;
  let result = [...projects];
  if (type) result = result.filter((p) => p.type === type);
  res.json({ success: true, data: result, total: result.length });
});

// GET /api/projects/:id
router.get("/:id", (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ success: false, message: "Projet introuvable" });
  res.json({ success: true, data: project });
});

module.exports = router;
