const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: String,
      default: "Pending",
    },
    relatedUser: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const data = mongoose.model("data", dataSchema);
module.exports = data;
