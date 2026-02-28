import supabase from "../config/supabaseClient.js";

export const createProfile = async (req, res) => {
  try {
    const { id, name, skills_offered, skills_wanted } = req.body;

    const { data, error } = await supabase
      .from("profiles")
      .insert([
        {
          id,
          name,
          skills_offered,
          skills_wanted
        }
      ]);

    if (error) return res.status(400).json(error);

    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
