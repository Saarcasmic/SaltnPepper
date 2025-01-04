import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import Contact from './components/Contact';
import About from './components/About/About';
import PaymentStatus from './components/PaymentStatus';
import UpcomingCoursesSection from './components/UpcomingCoursesSection';
import { useState } from 'react';
import { Clock, IndianRupee } from 'lucide-react';
import { courses } from './data/courses';
import TrainingProgramsSection from './components/TrainingProgramsSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import AboutSalt from './components/AboutSalt';
import ScrollableContainer from './ScrollableContainer';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  interface Course {
    title: string;
    description: string;
    duration: string;
    price: number;
    spots: number;
  }

  const handleDetailsClick = (courseId: { id: number }) => {
    const course = courses.find(c => c.id === Number(courseId.id));
    if (course) {
      setSelectedCourse(course);
      setIsSidebarOpen(true);
    }
  };

  const MainContent = () => (
    <main>
      <Hero />
      <About />
      <UpcomingCoursesSection onDetailsClick={handleDetailsClick} />
      <CoursesSection />
      <TrainingProgramsSection />
      <TestimonialsCarousel />
      <Contact />
    </main>
  );

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedCourse(null);
  };

  return (
    
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        {/* <ScrollableContainer> */}
        <Routes>
          <Route path="/payment/success" element={<PaymentStatus />} />
          <Route path="/about-salt" element={<AboutSalt />} />
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<MainContent />} />
        </Routes>
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
                  <span>₹{selectedCourse.price}</span>
                </div>
                <div className="flex items-center mt-2">
                  <span>{selectedCourse.spots} spots left</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* </ScrollableContainer> */}
      </div>
    </Router>
    
  );
}

export default App;