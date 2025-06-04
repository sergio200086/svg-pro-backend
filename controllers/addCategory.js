import models from "../models/index.js";
const { Categories } = models;

export default async function addCategory(req, res) {
  try {
    const category = await Categories.create({ name: req.body.name });
    return res.status(200).send("Category added successfully " + category.name);
  } catch (error) {
    return res.status(500).send("Error adding category: " + error.message);
  }
}
