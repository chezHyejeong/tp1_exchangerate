import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function getExchangeRate() {
    try {
        const apiKey = process.env.EXCHANGE_RATE_API_KEY;
        const response = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&symbols=USD,EUR`);
        const rate = response.data.rates.USD;
        return rate;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}