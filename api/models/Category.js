const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const categorySchema = mongoose.model("Category", CategorySchema);
module.exports = categorySchema
