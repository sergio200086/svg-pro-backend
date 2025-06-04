import model from "../models/index.js";
const { Categories } = model;

export default async function getAllCategories(req, res) {
  try {
    const categories = await Categories.findAll();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
}
