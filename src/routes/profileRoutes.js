import express from "express";
import supabase from "../config/supabaseClient.js";

const router = express.Router();


// ✅ GET ALL PROFILES
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*");

    if (error) throw error;

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ CREATE PROFILE
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email required" });
    }

    const { data, error } = await supabase
      .from("profiles")
      .insert([{ name, email }])
      .select();

    if (error) throw error;

    res.status(201).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ UPDATE PROFILE
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("profiles")
      .update(req.body)
      .eq("id", id)
      .select();

    if (error) throw error;

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ DELETE PROFILE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("profiles")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.status(200).json({ message: "Profile deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;