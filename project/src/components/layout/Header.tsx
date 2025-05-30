import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setProjectsDropdownOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setProjectsDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-primary-800 shadow-md py-3' : 'bg-transparent text-white py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
         <Link to="/" className="flex items-center">
 <img
  src="/logo-SVG.svg"
  alt="Logo"
  className={`h-20  w-20 transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-100 '}`}
/>

</Link>


          {/* Hamburger Button */}
          <button 
            className="text-2xl  focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? 'text-primary-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-primary-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Full-screen Overlay Menu */}
      
     <AnimatePresence>
  {isOpen && (
    <motion.div
      className="fixed inset-0 z-40 bg-white text-primary-800 flex flex-col items-center justify-center space-y-6 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
     <div className="absolute top-0 left-0 right-0 z-50">
  <div className="container mx-auto px-4 md:px-8 flex justify-end pt-6">
    <button 
      onClick={closeMenu}
      aria-label="Close menu"
      className="text-primary-800 hover:text-secondary-500"
    >
      <X size={28} />
    </button>
  </div>
</div>


      {/* Menu Items */}
      <ul className="text-center space-y-6 text-lg font-medium">
        <li>
          <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'text-secondary-500' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'text-secondary-500' : ''}>
            About
          </Link>
        </li>
        <li>
          <button
            className="flex items-center justify-center"
            onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
          >
            Projects <ChevronDown className="ml-2" size={18} />
          </button>
          {projectsDropdownOpen && (
            <div className="mt-2 space-y-2 text-base">
              <Link to="/projects?category=residential" onClick={closeMenu}>Residential</Link>
              <Link to="/projects?category=commercial" onClick={closeMenu}>Commercial</Link>
              <Link to="/projects?category=luxury" onClick={closeMenu}>Luxury</Link>
              <Link to="/projects" onClick={closeMenu}>View All</Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'text-secondary-500' : ''}>
            Contact
          </Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link to="/admin" onClick={closeMenu}>Admin</Link>
            </li>
            <li>
              <button onClick={() => { logout(); closeMenu(); }}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>

      {/* Contact Info */}
      <div className="mt-6 flex items-center justify-center">
        <Phone size={18} className="mr-2 text-primary-600" />
        <span className="text-base font-medium">+91 98765 43210</span>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;
