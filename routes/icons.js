import getAllIcons from "../controllers/icons/getAllIcons.js";
import addIcon from "../controllers/icons/addIcon.js";
import deleteIcon from "../controllers/icons/deleteIcon.js";
import updateIcon from "../controllers/icons/updateIcon.js";
import addIconOptions from "./options/addIconOptions.js";

export default async function (fastify, options) {
  fastify.get("/all-icons", getAllIcons);
  fastify.delete("/delete-icon/:id", deleteIcon);
  fastify.post("/add-icon", addIconOptions, addIcon);
  fastify.put("/update-icon/:id", updateIcon);
}
