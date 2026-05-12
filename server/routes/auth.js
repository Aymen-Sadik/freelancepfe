const express = require("express");
const router = express.Router();

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email et mot de passe requis." });
  }

  // Simulation — replace with real DB logic
  if (email === "admin@freelancehub.ma" && password === "admin123") {
    return res.json({
      success: true,
      message: "Connexion réussie",
      user: { id: 1, name: "Admin", email, role: "admin" },
      token: "mock_jwt_token_admin",
    });
  }

  res.json({
    success: true,
    message: "Connexion réussie",
    user: { id: 2, name: "Yassine El Amrani", email, role: "freelancer" },
    token: "mock_jwt_token_user",
  });
});

// POST /api/auth/register
router.post("/register", (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ success: false, message: "Tous les champs sont requis." });
  }

  // Simulation
  res.status(201).json({
    success: true,
    message: "Compte créé avec succès",
    user: { id: Date.now(), name, email, role },
    token: "mock_jwt_token_new_user",
  });
});

module.exports = router;
