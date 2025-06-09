import iconModel from "../../models/icons.js";

export default async function deleteIcon(req, res) {
  try {
    const iconId = req.params.id;

    if (!iconId) {
      return res.status(400).send("Missing required field: id");
    }

    const icon = await iconModel.Icon.findByIdAndDelete(iconId);
    console.log(icon);
    if (!icon) {
      return res.status(404).send("Icon not found");
    }

    return res.status(200).send("Icon deleted successfully");
  } catch (error) {
    return res.status(500).send("Error deleting icon: " + error.message);
  }
}
