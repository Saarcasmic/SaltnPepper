// functions/payment.js
import { Handler } from '@netlify/functions';

const handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from Netlify!' }),
    };
};

export { handler };
