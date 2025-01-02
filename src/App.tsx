import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import BlogSection from './components/WhyJoinUsSection';
import Contact from './components/Contact';
import About from './components/About/About';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <BlogSection />
        <CoursesSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;