import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If on homepage, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add effect to handle scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = (location.state as { scrollTo: string }).scrollTo;
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
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
            <a href="#home" className="nav-link" onClick={(e) => handleNavigation(e, 'home')}>
              Home
            </a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavigation(e, 'about')}>
              About Chef
            </a>
            <a href="/about-salt" className="nav-link">
              About Us
            </a>
            <a href="#courses" className="nav-link" onClick={(e) => handleNavigation(e, 'courses')}>
              Courses
            </a>
            <a href="#testinomials" className="nav-link" onClick={(e) => handleNavigation(e, 'testinomials')}>
              Testinomials
            </a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavigation(e, 'contact')}>
              Contact
            </a>
            
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
              <a href="#home" className="mobile-nav-link" onClick={(e) => handleNavigation(e, 'home')}>
                Home
              </a>
              <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavigation(e, 'about')}>
                About Chef
              </a>
              <a href="/about-salt" className="mobile-nav-link">
                About Us
              </a>
              <a href="#courses" className="mobile-nav-link" onClick={(e) => handleNavigation(e, 'courses')}>
                Courses
              </a>
              <a href="#testinomials" className="mobile-nav-link" onClick={(e) => handleNavigation(e, 'testinomials')}>
                Testinomials
              </a>
              
              <a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavigation(e, 'contact')}>
                Contact
              </a>
              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}