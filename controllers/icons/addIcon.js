import models from "../../models/index.js";
const { Icons } = models;

export default async function addIcon(req, res) {
  try {
    if (!req.body.name || !req.body.categoryId || !req.body.svgText) {
      return res
        .status(400)
        .send("Missing required fields: name, categoryId, svgText");
    }
    const icon = await Icons.create({
      name: req.body.name,
      categoryId: req.body.categoryId,
      svgText: req.body.svgText,
      createdTime: new Date(),
    });
    return res.status(200).send("Icon added successfully: " + icon.name);
  } catch (error) {
    return res.status(500).send("Error adding icon: " + error.message);
  }
}
