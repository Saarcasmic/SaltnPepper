import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/paymentRoutes.js';  // Note the .js extension
import corsOptions from './config/cors.js';  // Note the .js extension

const app = express();

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// // Health check route
// app.get('/api', (req, res) => {
//   res.status(200).json({ message: 'API is running' });
// });

app.get('/api', (req, res) => {
  console.log('Environment variables:', {
    nodeEnv: process.env.NODE_ENV,
    frontendUrl: process.env.FRONTEND_URL
  });
  res.status(200).json({ message: 'API is running' });
});

// Routes
app.use('/api', paymentRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Vercel serverless function handler
export default app;