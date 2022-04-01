import mongoose from "mongoose";

const HelloSchema = mongoose.Schema({
  title: String,
  quantity: String,
  Address: String,
  name: String,
  creator: String,
  tags: [String],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const HelloModal = mongoose.model("hello", HelloSchema);

export default HelloModal;
