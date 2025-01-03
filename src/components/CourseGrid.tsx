import CourseCard from './CourseCard';
import { useState } from 'react';
import { courses } from '../data/courses';
import { Clock, IndianRupee } from 'lucide-react';

interface CourseGridProps {
  activeCategory: string;
}


export default function CourseGrid({ activeCategory }: CourseGridProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    price: number;
    spots: number;
    category: string;
  }

  const handleDetailsClick = (course: Course) => {
    setSelectedCourse(course);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} onDetailsClick={() => handleDetailsClick(course)} />
        ))}
      </div>

      {isSidebarOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-80 h-full shadow-lg p-6">
            <button
              onClick={handleCloseSidebar}
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Close
            </button>
            <h3 className="text-xl font-semibold text-gray-900">{selectedCourse.title}</h3>
            <p className="mt-2 text-gray-600">{selectedCourse.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{selectedCourse.duration}</span>
              </div>
              <div className="flex items-center mt-2">
                <IndianRupee className="h-4 w-4 mr-1" />
                <span>{selectedCourse.price}</span>
              </div>
              <div className="flex items-center mt-2">
                <span>{selectedCourse.spots} spots left</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
