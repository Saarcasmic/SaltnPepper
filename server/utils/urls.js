const BASE_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

export const getSuccessUrl = (courseId) => 
  `${BASE_URL}/payment/success?course=${courseId}`;

export const getCancelUrl = () => 
  `${BASE_URL}/payment/cancel`;