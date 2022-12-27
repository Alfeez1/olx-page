import mongoose from 'mongoose';
import 'dotenv/config';
export const Connections = () => {
  const MONGODB_URI = 'mongodb://localhost:27017/olxlogin';
  mongoose.connect(process.env.MONGO_URL, {});

  mongoose.connection.on('connected', () => {
    console.log('database connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
  });
};
export default Connections;
