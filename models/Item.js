import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastDate: {
    type: Date,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
