import models from "../../models/index.js";
const { Icons } = models;

export default async function deleteIcon(req, res) {
  try {
    const iconId = req.params.id;

    if (!iconId) {
      return res.status(400).send("Missing required field: id");
    }

    const icon = await Icons.findByPk(iconId);
    if (!icon) {
      return res.status(404).send("Icon not found");
    }

    await Icons.destroy({ where: { id: iconId } });
    return res.status(200).send("Icon deleted successfully");
  } catch (error) {
    return res.status(500).send("Error deleting icon: " + error.message);
  }
}
