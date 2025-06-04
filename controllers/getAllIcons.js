import db from "../models/index.js";

export default async function getAllIcons(req, res) {
  try {
    const icons = await db.Icons.findAll();
    res.status(200).send(icons);
  } catch (error) {
    console.error("Error fetching icons:", error);
    res.status(500).send("Internal Server Error");
  }
}
