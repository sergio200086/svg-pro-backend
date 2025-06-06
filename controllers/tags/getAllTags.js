import db from "../../models/index.js";

export default async function getAllTags(req, res) {
  try {
    const tags = await db.Tags.findAll();
    res.status(200).send(tags);
  } catch (error) {
    console.log("Error fetching tags: ", error);
    res.status(500).send("Internal Server Error");
  }
}
