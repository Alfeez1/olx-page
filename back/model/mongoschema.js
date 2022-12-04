import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
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

  { collection: 'usersignup' }
);
const User = new mongoose.model('Userslist', userSchema);
export default User;
