import addCategory from "../controllers/addCategory.js";
import getAllCategories from "../controllers/getAllCategories.js";
import addCategoryOptions from "./options/addCategoryOptions.js";

export default async function (fastify) {
  fastify.get("/", getAllCategories);
  fastify.post("/add-category", addCategoryOptions, addCategory);
}
