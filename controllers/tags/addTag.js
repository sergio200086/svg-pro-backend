import db from "../../models/index.js";

export default async function (req, res) {
  try {
    const tag = await db.Tags.create({ name: req.body.name });
    const confirm = await db.Tags.findAll({
      where: {
        name: req.body.name,
      },
    });

    if (confirm !== null) {
      return res.status(200).send("Tag created correctly " + tag.name);
    }
    return res.status(500).send("Error adding category: " + error.message);
  } catch (error) {
    return res.status(500).send("Error adding category: " + error.message);
  }
}
