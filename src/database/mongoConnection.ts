import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/transactions');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongoDB;
