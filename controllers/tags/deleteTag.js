import db from "../../models/index.js";

export default async function deleteTag(req, res) {
  try {
    const tagId = req.params.id;
    if (!tagId) {
      return res.status(400).send("Missing required field: id");
    }
    const tag = await db.Tags.findByPk(tagId);
    if (!tag) {
      return res.status(400).send("Tag not found");
    }
    await db.Tags.destroy({ where: { id: tagId } });
    return res.status(200).send("Tag deleted successfully");
  } catch (error) {
    return res.status(500).send("Error deleting icon: " + error.message);
  }
}
