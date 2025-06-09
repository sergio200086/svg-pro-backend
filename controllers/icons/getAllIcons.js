import iconModel from "../../models/icons.js";

export default async function getAllIcons(req, res) {
  try {
    const icons = await iconModel.Icon.find();
    if (!icons) {
      res.status(500).send("There is a problem obtaining the icons");
    }
    res.status(200).send(icons);
  } catch (error) {
    console.error("Error fetching icons:", error);
    res.status(500).send("Internal Server Error");
  }
}
