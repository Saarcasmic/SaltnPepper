import { Clock, Users } from 'lucide-react';
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
}

export default function CourseCard({ 
  id, title, description, image, duration, category, price, spots 
}: CourseCardProps) {
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
            <Users className="h-4 w-4 mr-1" />
            <span>{spots} spots left</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">₹{price}</span>
          <PaymentButton courseId={id} price={price} />
        </div>
      </div>
    </div>
  );
}