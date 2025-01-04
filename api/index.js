import app from './payment.js';
import { createServerlessExpress } from '@vendia/serverless-express';

export const config = {
  api: {
    bodyParser: false, // Required for serverless Express
  },
};

const server = createServerlessExpress({ app });
export default server;
