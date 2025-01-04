const API_URL = import.meta.env.PROD
  ? 'https://saltn-pepper.vercel.app/api'  // Replace with your Vercel URL
  : 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  payment: `${API_URL}/payment`,
  // add other endpoints as needed
};

export default API_URL;