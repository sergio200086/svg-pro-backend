import addCategory from "../controllers/categories/addCategory.js";
import getAllCategories from "../controllers/categories/getAllCategories.js";
import addCategoryOptions from "./options/addCategoryOptions.js";

export default async function (fastify) {
  fastify.get("/all-categories", getAllCategories);
  fastify.post("/add-category", addCategoryOptions, addCategory);
}
