// functions/payment.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import corsOptions from '../server/config/cors.js'; // Adjust path as necessary
import paymentRoutes from '../server/routes/paymentRoutes.js'; // Adjust path as necessary
import serverless from 'serverless-http';

dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', paymentRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: { 
      message: 'Internal server error',
      code: err.code 
    }
  });
});

// Export the handler for Netlify
export const handler = serverless(app);
