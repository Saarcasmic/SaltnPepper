import { useState } from 'react';
import { initializeRazorpay, createOrder, verifyPayment } from '../utils/payment';

interface PaymentButtonProps {
  courseId: number;
  price: number;
  className?: string;
}

export default function PaymentButton({ courseId, price, className = '' }: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      const res = await initializeRazorpay();
      if (!res) {
        alert('Razorpay SDK failed to load. Please try again later.');
        return;
      }

      const order = await createOrder(courseId, price);
      
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Salt & Pepper Cooking Classes",
        description: `Course #${courseId} Payment`,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            const data = await verifyPayment(response);
            if (data.verified) {
              window.location.href = `/payment/success?course=${courseId}`;
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        theme: {
          color: "#f97316"
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className={`px-4 py-2 bg-orange-500 text-white rounded-lg 
                 hover:bg-orange-600 transition-colors
                 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? 'Processing...' : 'Book Now'}
    </button>
  );
}