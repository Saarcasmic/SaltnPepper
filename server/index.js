import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import corsOptions from './config/cors.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});