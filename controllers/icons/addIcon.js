import iconModel from "../../models/icons.js";
import mongoose from "mongoose";

export default async function addIcon(req, res) {
  try {
    if (!req.body.name || !req.body.tags || !req.body.svgText) {
      return res
        .status(400)
        .send("Missing required fields: name, categoryId, svgText");
    }

    const iconObj = {
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      tags: req.body.tags,
      svgText: req.body.svgText,
      createdTime: new Date(),
    };

    const icon = new iconModel.Icon(iconObj);
    icon.save();
    return res.status(200).send("Icon added successfully: " + icon.name);
  } catch (error) {
    return res.status(500).send("Error adding icon: " + error);
  }
}
