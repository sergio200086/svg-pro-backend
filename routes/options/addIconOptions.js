export default {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        categoryId: { type: "integer" },
        svgText: { type: "string" },
      },
      required: ["name", "categoryId", "svgText"],
    },
  },
};
