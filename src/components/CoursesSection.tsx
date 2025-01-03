import { useState } from 'react';
import CourseGrid from './CourseGrid';
import { categories } from '../data/courses';
import CourseCard from './CourseCard';
import { Course } from '../types/course';
import { courses } from '../data/courses';

interface CoursesSectionProps {
  onDetailsClick: (courseId: { id: number }) => void;}

export default function CoursesSection({ onDetailsClick }: CoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const courses: Course[] = [
    // Your courses data here
  ];

  return (
    <section className="py-24 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Our Courses</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our wide range of cooking classes taught by expert chefs.
          Master new techniques and cuisines at your own pace.
        </p>
        
        <div className="mb-12">
          {/* Desktop buttons - hidden on mobile */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full ${
                activeCategory === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              } transition-colors`}
            >
              All Courses
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile dropdown - hidden on desktop */}
          <div className="md:hidden flex justify-center">
            <div className="relative w-full max-w-xs">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-6 py-3 rounded-lg border-2 border-orange-200 bg-white text-gray-700
                         focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                         appearance-none w-full shadow-sm hover:border-orange-300
                         transition-colors cursor-pointer pr-10"
              >
                <option value="all">All Courses</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg 
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <CourseGrid activeCategory={activeCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard 
              key={course.id} 
              {...course} 
              onDetailsClick={onDetailsClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}