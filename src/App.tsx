import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
// import BlogSection from './components/WhyJoinUsSection';
import Contact from './components/Contact';
import About from './components/About/About';
import PaymentStatus from './components/PaymentStatus';
import UpcomingCoursesSection from './components/UpcomingCoursesSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/payment/success" element={<PaymentStatus />} />
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <UpcomingCoursesSection />
              <CoursesSection />
              <Contact />
            </main>
          } />
          <Route path="*" element={
            <main>
              <Hero />
              <About />
              <UpcomingCoursesSection />
              <CoursesSection />
              <Contact />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;