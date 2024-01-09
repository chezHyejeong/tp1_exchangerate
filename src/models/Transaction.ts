import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    amount: Number,
    currency: String,
    date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
