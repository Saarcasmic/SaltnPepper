import CourseCard from './CourseCard';
import { courses } from '../data/courses';

interface CourseGridProps {
  activeCategory: string;
}

export default function CourseGrid({ activeCategory }: CourseGridProps) {
  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}