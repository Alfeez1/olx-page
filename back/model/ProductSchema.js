import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    item: { type: String, required: true },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true },

  { collection: 'product' }
);
const User = new mongoose.model('productlist', ProductSchema);
export default User;
