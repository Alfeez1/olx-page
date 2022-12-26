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
    // image: {
    //   type: Array,
    //   data: Buffer,
    //   contentType: String,
    // },
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    imageLength: {
      type: Array,
    },
  },
  { timestamps: true },

  { collection: 'product' }
);
const User = new mongoose.model('productlist', ProductSchema);
export default User;
