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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});