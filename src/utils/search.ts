import { courses } from '../data/courses';

export const searchCourses = (query: string) => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm) ||
    course.description.toLowerCase().includes(searchTerm) ||
    course.category.toLowerCase().includes(searchTerm)
  );
};