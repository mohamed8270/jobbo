import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGO_DB) return console.log('Mongo DB URI is not defined');

    if(isConnected) return console.log('Using existing database connection');
    
    try {
        await mongoose.connect(process.env.MONGO_DB);

        isConnected = true;

        console.log('Mongo DB is Connected');
    } catch (error) {
        console.log(error);
    }
}