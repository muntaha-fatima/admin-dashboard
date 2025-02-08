
import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  customerName: String,
  userId: String, // Add this field
  email: String, // Add this field
  total: Number,
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)

