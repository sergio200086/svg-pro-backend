import getAllTags from "../controllers/tags/getAllTags.js";
import addTag from "../controllers/tags/addTag.js";
import deleteTag from "../controllers/tags/deleteTag.js";
import addTagOptions from "./options/addTagOptions.js";

export default async function (fastify) {
  fastify.get("/all-tags", getAllTags);
  fastify.delete("/delete-tag/:id", deleteTag);
  fastify.post("/add-tag", addTagOptions, addTag);
}
