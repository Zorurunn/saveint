/* eslint-disable no-secrets/no-secrets */
import mongoose from 'mongoose';

type ConnectToDatabaseOptions = {
  username?: string;
  password?: string;
};

export const connectToDatabase = async ({ username = 'zorurunn', password = 'test' }: ConnectToDatabaseOptions) => {
  try {
    await mongoose.connect('mongodb+srv://zorurunn:test@zoloocluster.kz13ip4.mongodb.net/cms?retryWrites=true&w=majority');
    console.log('Database connected');
  } catch (error) {
    throw new Error('Error connecting to database');
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    throw new Error('Error disconnecting from database');
  }
};
