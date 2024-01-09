import express from 'express';
import { getExchangeRate } from '../services/exchangeRateService';
import { getAllTransactions, getTransactionById } from '../services/transactionService';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send(`
        <h1>API Endpoints</h1>
        <ul>
            <li><a href="/exchangerate">/exchangerate</a> - Consultez le taux de change actuel euro-dollar</li>
            <li><a href="/transactions">/transactions</a> - Consultez la liste de toutes les transactions</li>
            <li><a href="/transactions/1">/transactions/1</a> - Consultez la valeur de la transaction de l'id 1</li>
        </ul>
    `);
});

router.get('/exchangerate', async (req, res) => {
    const rate = await getExchangeRate();
    if (rate) {
        res.send(`
            <h1>Exchange Rate: Euro to Dollar</h1>
            <p>Rate: ${rate}</p>
            <a href="/">revenir</a>
        `);
    } else {
        res.status(500).send('Unable to retrieve exchange rate');
    }
});


router.get('/transactions', async (req, res) => {
    try {
        const transactions = await getAllTransactions();
        res.send(`
            <h1>Transactions List</h1>
            <pre>${JSON.stringify(transactions, null, 2)}</pre>
            <a href="/">revenir</a>
        `);
    } catch (error) {
        res.status(500).send('Error fetching transactions');
    }
});

router.get('/transactions/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const transaction = await getTransactionById(id);

        if (!transaction) {
            return res.status(404).send('Transaction not found');
        }

        const rate = await getExchangeRate();

        if (!rate) {
            return res.status(500).send('Error retrieving exchange rate');
        }

        const amount = transaction.amount ?? 0;
        const valueInDollar = amount * rate;
        
        res.send(`
            <h1>Transaction Details</h1>
            <pre>${JSON.stringify({ ...transaction, valueInDollar: valueInDollar }, null, 2)}</pre>
            <a href="/">revenir</a>
        `);
    } catch (error) {
        res.status(500).send('Error fetching transaction');
    }
});

export default router;