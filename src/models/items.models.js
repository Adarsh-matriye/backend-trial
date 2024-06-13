import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter item name"],
    },
    quantity: {
      type: String,
      required: [true, "Please enter quantity"],
      min: 1,
    },
    price: {
      type: Number,
      required: [true, "Please enter price"],
      min: 1,
    },
    expiryDate: { type: Date, required: [true, "Please select date"] }, // Expiry date field
  },
  { timestamps: true },
  { strict: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
