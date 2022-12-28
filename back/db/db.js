import mongoose from 'mongoose';
import 'dotenv/config';
export const Connections = () => {
  const MONGO_URL =
    'mongodb+srv://alfeez:alfeez@sale.gafp4cz.mongodb.net/?retryWrites=true&w=majority';
  mongoose.connect(
    // process.env.
    MONGO_URL,
    
    {}
  );

  mongoose.connection.on('connected', () => {
    console.log('database connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
  });
};
export default Connections;
