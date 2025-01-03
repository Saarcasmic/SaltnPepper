import { courses } from '../data/courses';
import UpcomingCourseCard from './UpcomingCourseCard';

export default function UpcomingCoursesSection() {
  const upcomingCourses = courses.filter(
    course => course.isUpcoming && course.startDate && course.startDate > new Date()
  );

  if (upcomingCourses.length === 0) return null;

  return (
    <section className="py-24 bg-white" id="upcoming-courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Upcoming Courses</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Don't miss out on our upcoming courses! Register now to secure your spot.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingCourses.map((course) => (
            <UpcomingCourseCard 
              key={course.id} 
              {...course} 
              startDate={course.startDate!}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 