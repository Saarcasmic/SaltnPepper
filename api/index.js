const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');
const corsOptions = require('./config/cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api', paymentRoutes);

// Vercel serverless function handler
if (process.env.VERCEL) {
  module.exports = app;
} else {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}