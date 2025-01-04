import { Clock } from 'lucide-react';
import PaymentButton from './PaymentButton';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  price: number;
  spots: number;
  isUpcoming?: boolean;
  onDetailsClick: (course: any) => void | undefined;
  vidAvailable: boolean;
}

export default function CourseCard({ 
  id, title, description, image, duration, category, price, spots, isUpcoming, onDetailsClick, vidAvailable 
}: CourseCardProps) {
  
  const upcomingStatus = isUpcoming ?? false;
  // const VideoAvailable = vidAvailable ?? false;

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
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
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
          {vidAvailable ? (
            <PaymentButton 
              courseId={id} 
              price={price} 
              coursetitle={title} 
              status={upcomingStatus} 
              coursecategory={category}
            />
          ) : (
            <div className="relative group">
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded-lg 
                    hover:bg-orange-600 transition-colors"
              >
                Inquire Us
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                +91 74098 68983
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}