// import express from 'express';
// import { createOrder, verifyPayment } from '../controllers/paymentController.js';

// const router = express.Router();

// router.post('/create-order', createOrder);
// router.post('/verify-payment', verifyPayment);

// export default router;

import express from 'express';
const router = express.Router();

// Define routes here
router.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

export default router; // Ensure this line is present
