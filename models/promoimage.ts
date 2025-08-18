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











import mongoose from "mongoose"

const promoSchema = new mongoose.Schema(
  // <-- یہاں سے اضافی 'new' اور آخر سے اضافی '()' ہٹا دیا گیا ہے
  {
    promoImageUrl: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
)

export const Promo = mongoose.models.Promo || mongoose.model("Promo", promoSchema)
