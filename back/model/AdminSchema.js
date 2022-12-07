import mongoose from 'mongoose';
const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },

  { collection: 'admin' }
);
const User = new mongoose.model('Adminlist', AdminSchema);
export default User;
