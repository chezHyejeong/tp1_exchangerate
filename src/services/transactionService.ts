import Transaction from '../models/Transaction';


export async function getAllTransactions() {
    try {
        const transactions = await Transaction.find();
        return transactions;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
}

export async function getTransactionById(id: number) {
    try {
        const transaction = await Transaction.findOne({ id: id });
        if (!transaction) {
            throw new Error(`Transaction with id ${id} not found`);
        }
        return transaction;
    } catch (error) {
        console.error('Error fetching transaction by id:', error);
        throw error;
    }
}
