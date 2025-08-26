// // models/promo.ts
// import mongoose from "mongoose";

// const promoSchema = new mongoose.Schema(
//   {
//     promoImageUrl: {
//       type: String,
//       required: true,
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// export const Promo = mongoose.models.Promo || mongoose.model("Promo", promoSchema);










// models/promos.ts

import mongoose, { Schema } from "mongoose";

const promoSchema = new Schema({
    promoImageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    title: String,
    contentType: { type: String, default: "image" }
}, { timestamps: true, collection: "promos" }); // ✅ Yahan collection ka naam 'promos' specify kiya gaya hai

export const Promo = mongoose.models.Promo || mongoose.model("Promo", promoSchema ,'promos');