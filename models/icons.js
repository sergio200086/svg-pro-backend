import mongoose from "mongoose";
import { Schema } from "mongoose";

let IconSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    tags: { type: [String], required: true },
    svgText: { type: String, required: true },
    createdTime: { type: Date, default: Date.now },
  },
  {
    collection: "icon",
  }
);

export default {
  Icon: mongoose.model("Icon", IconSchema),
  IconSchema: IconSchema,
};
