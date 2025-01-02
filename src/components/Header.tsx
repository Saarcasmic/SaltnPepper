import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
            <img src='https://i.ibb.co/TM8YxY6/logo-removebg-preview.png' height={80} width={80} alt="Logo" />
            <span className="text-xl font-semibold text-gray-900">Salt & Pepper</span>
            </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link" onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}>Home</a>
            <a href="#about" className="nav-link" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}>About Us</a>
            <a href="#courses" className="nav-link" onClick={(e) => {
              e.preventDefault();
              document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}>Courses</a>
            <a href="#contact" className="nav-link" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}>Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="mobile-nav-link" onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>Home</a>
              <a href="#about" className="mobile-nav-link" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>About Us</a>
              <a href="#courses" className="mobile-nav-link" onClick={(e) => {
                e.preventDefault();
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>Courses</a>
              <a href="#contact" className="mobile-nav-link" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}