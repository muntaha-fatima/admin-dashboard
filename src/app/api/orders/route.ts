

import { db } from "../../component/prducted/lib/db"
import { NextResponse } from "next/server"
import mongoose from "mongoose"

// Define Order Schema
const OrderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
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

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema)

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")
  return response
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 200 }))
}

export async function POST(request: Request) {
  try {
    await db()

    const data = await request.json()
    console.log("Received order data:", data)

    const order = await Order.create(data)
    console.log("Created order:", order)

    return corsResponse(NextResponse.json({ success: true, order }))
  } catch (error) {
    console.error("API Error:", error)
    return corsResponse(NextResponse.json({ error: "Failed to create order" }, { status: 500 }))
  }
}

export async function GET() {
  try {
    await db()
    const orders = await Order.find().sort({ createdAt: -1 })
    return corsResponse(NextResponse.json({ orders }))
  } catch (error) {
    console.error("API Error:", error)
    return corsResponse(NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 }))
  }
}

