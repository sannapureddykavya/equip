require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const equipmentRoutes = require("./routes/equipmentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/equipment", equipmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
