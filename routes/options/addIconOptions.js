export default {
  schema: {
    querystring: {},
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        tags: { type: "array", items: { type: "string" } },
        svgText: { type: "string" },
      },
      required: ["name", "tags", "svgText"],
    },
  },
};
