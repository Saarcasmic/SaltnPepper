import { razorpay } from '../config/razorpay.js';
import crypto from 'crypto';

export const createOrder = async (req, res) => {
  try {
    const { courseId, price } = req.body;
    
    const options = {
      amount: price * 100, // Convert to paise
      currency: 'INR',
      receipt: `course_${courseId}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    res.status(500).json({ 
      error: {
        message: 'Failed to create order',
        code: error.code
      }
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature 
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is successful
      res.json({ 
        verified: true,
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id
      });
    } else {
      res.status(400).json({ 
        verified: false,
        error: { message: 'Invalid signature' }
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ 
      verified: false,
      error: { message: 'Verification failed' }
    });
  }
};