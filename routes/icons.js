import getAllIcons from "../controllers/getAllIcons.js";
import addIcon from "../controllers/addIcon.js";
import addIconOptions from "./options/addIconOptions.js";
import deleteIcon from "../controllers/deleteIcon.js";

export default async function (fastify, options) {
  fastify.get("/all-icons", getAllIcons);
  fastify.delete("/delete-icon/:id", deleteIcon);
  fastify.post("/add-icon", addIconOptions, addIcon);
}
