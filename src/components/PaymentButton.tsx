import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { initializeRazorpay, createOrder, verifyPayment } from '../utils/payment';

interface PaymentButtonProps {
  courseId: number;
  price: number;
  className?: string;
  coursetitle: string;
  status: boolean;
  coursecategory: string;
}

export default function PaymentButton({ 
  courseId, 
  coursetitle, 
  status, 
  price, 
  coursecategory, 
  className = '' 
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEmail('');
  };

  const handleEmailSubmit = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    handlePayment();
  };

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
        name: 'Salt & Pepper Cooking Classes',
        description: `Course->(${coursetitle}) under Category->(${coursecategory}) having id->(#${courseId}) with upcoming status->(${status})`,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            const data = await verifyPayment(response);
            if (data.verified) {
              window.location.href = `/payment/success?status=success&course=${courseId}`;
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          email,
          contact: '',
        },
        theme: {
          color: '#f97316',
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
      handleCloseDialog();
    }
  };

  const EmailDialog = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);


    // Stop propagation of click events
    const handleDialogClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    return createPortal(
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleCloseDialog}
      >
        <div 
          className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative"
          onClick={handleDialogClick}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Your Email</h3>
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCloseDialog}
              className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleEmailSubmit}
              disabled={isLoading}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
            {isLoading ? 'Processing...' : 'Submit'}
            </button>
          </div>

          <button
            onClick={handleCloseDialog}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div>
      {!isLoading && (
        <button
          onClick={handleOpenDialog}
          disabled={isLoading}
          className={`px-4 py-2 bg-orange-500 text-white rounded-lg 
                     hover:bg-orange-600 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          Book Now
        </button>
      )}

      {isDialogOpen && <EmailDialog />}
    </div>
  );
}