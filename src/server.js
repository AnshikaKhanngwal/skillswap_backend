import "./config/env.js"; // MUST BE FIRST

import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/profiles", profileRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});