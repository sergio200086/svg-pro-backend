import iconModel from "../../models/icons.js";

export default async function updateIcon(req, res) {
  try {
    if (!req.params.id) {
      return res.status(400).send("Icon id is required to modify it");
    }

    const icon = await iconModel.Icon.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      svgText: req.body.svgText,
    });
    if (!icon) {
      return res.status(404).send("Icon was not found");
    }
    return res.status(200).send("Icon updated correctly");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
