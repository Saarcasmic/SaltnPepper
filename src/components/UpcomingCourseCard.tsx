import { Clock, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import PaymentButton from './PaymentButton';

interface UpcomingCourseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  price: number;
  spots: number;
  startDate: Date;
  isUpcoming?: boolean;
  onDetailsClick: (course: any) => void;
}

function getTimeRemaining(startDate: Date) {
  const total = startDate.getTime() - new Date().getTime();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((total % (1000 * 60)) / 1000);

  return { total, days, hours, minutes, seconds };
}

export default function UpcomingCourseCard({ 
  id, title, description, image, duration, category, price, spots, startDate, isUpcoming, onDetailsClick 
}: UpcomingCourseCardProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(startDate));
  const upcomingStatus = isUpcoming ?? false;

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(startDate);
      setTimeLeft(remaining);
      
      if (remaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const handleDetailsClick = () => {
    onDetailsClick({ id, title, description, image, duration, category, price, spots });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center text-orange-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {startDate.toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-2 mb-4">{description}</p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {timeLeft.total > 0 ? (
            <>
              <div className="text-center p-2 bg-orange-50 rounded-lg">
                <div className="text-xl font-bold text-orange-500">{timeLeft.days}</div>
                <div className="text-xs text-gray-500">Days</div>
              </div>
              <div className="text-center p-2 bg-orange-50 rounded-lg">
                <div className="text-xl font-bold text-orange-500">{timeLeft.hours}</div>
                <div className="text-xs text-gray-500">Hours</div>
              </div>
              <div className="text-center p-2 bg-orange-50 rounded-lg">
                <div className="text-xl font-bold text-orange-500">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-500">Minutes</div>
              </div>
              <div className="text-center p-2 bg-orange-50 rounded-lg">
                <div className="text-xl font-bold text-orange-500">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-500">Seconds</div>
              </div>
            </>
          ) : (
            <div className="col-span-4 text-center text-orange-500 font-semibold">
              Course has started!
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">₹{price}</span>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleDetailsClick}
            className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Details
          </button>
          <PaymentButton courseId={id} price={price} coursetitle={title} status={upcomingStatus} coursecategory={category}/>
        </div>
      </div>
    </div>
  );
}