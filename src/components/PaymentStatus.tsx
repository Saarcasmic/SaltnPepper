import { CheckCircle, XCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const courseId = searchParams.get('course');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="card p-8 text-center">
          {status === 'success' ? (
            <>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for enrolling in our course. You'll receive a confirmation email shortly.
              </p>
              <a href={`/courses/${courseId}`} className="btn-primary inline-block">
                View Course
              </a>
            </>
          ) : (
            <>
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h1>
              <p className="text-gray-600 mb-6">
                Something went wrong with your payment. Please try again or contact support.
              </p>
              <div className="space-x-4">
                <button onClick={() => window.history.back()} className="btn-secondary">
                  Try Again
                </button>
                <a href="/contact" className="btn-primary inline-block">
                  Contact Support
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}