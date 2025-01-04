import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { searchCourses } from '../utils/search';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<
    { id: number; title: string; description: string; image: string; duration: string; category: string; price: number; spots: number; }[]
  >([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchCourses(searchQuery);
    setSearchResults(results);
  };

  const handleSearchItemClick = (course: any) => {
    setSearchResults([]);
    setSearchQuery('');
    const element = document.getElementById('courses');
    element?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('setActiveCategory', {
      detail: { category: course.category }
    }));
  };

  return (
    <div className="relative bg-orange-50 min-h-screen flex items-center" id="home">
      <div className="absolute inset-0">
        <img
          src="/Background.jpg"
          alt="Cooking class background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Master the Art of Cooking</span>
            <span className="block text-orange-500">with Salt & Pepper</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join our expert-led cooking classes and discover the joy of creating delicious meals. 
            With over 40 courses in various cuisines, there's something for everyone.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What would you like to learn? e.g., 'baking desserts'"
                className="w-full px-5 py-3 border border-gray-300 rounded-full text-gray-900 
                         focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-500 
                         rounded-full text-white hover:bg-orange-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            {searchResults.length > 0 && (
              <div
                className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg overflow-y-auto max-h-96"
                style={{
                  border: '1px solid #e2e8f0',
                }}
              >
                <ul className="divide-y divide-gray-100">
                  {searchResults.map((course: any) => (
                    <li
                      key={course.id}
                      className="p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleSearchItemClick(course)}
                    >
                      <div className="flex items-center">
                        <img src={course.image} alt={course.title} className="w-16 h-16 object-cover rounded" />
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-500">{course.category}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
