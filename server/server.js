const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/categories", require("./routes/categories"));
app.use("/api/freelancers", require("./routes/freelancers"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/auth", require("./routes/auth"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "FreelanceHub API is running", timestamp: new Date().toISOString() });
});

// Serve React client build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`\n🚀 FreelanceHub API running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoints:`);
  console.log(`   GET  /api/health`);
  console.log(`   GET  /api/categories`);
  console.log(`   GET  /api/freelancers`);
  console.log(`   GET  /api/projects`);
  console.log(`   POST /api/auth/login`);
  console.log(`   POST /api/auth/register\n`);
});
