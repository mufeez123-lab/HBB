import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="font-serif text-2xl font-bold">
                <span className="text-white">Hindustan</span>
                <span className="text-secondary-500">Bawa</span>
              </h2>
              <div className="w-12 h-1 bg-secondary-500 mt-2 mb-4"></div>
            </div>
            <p className="text-neutral-300 mb-6">
              Building landmarks of excellence and delivering exceptional quality in every project since 1995.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-secondary-500 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-secondary-500 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-secondary-500 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="inline-flex items-center text-neutral-300 hover:text-secondary-500 transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center text-neutral-300 hover:text-secondary-500 transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="inline-flex items-center text-neutral-300 hover:text-secondary-500 transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/projects?category=residential" className="inline-flex items-center text-neutral-300 hover:text-secondary-500 transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Residential
                </Link>
              </li>
              <li>
                <Link to="/projects?category=commercial" className="inline-flex items-center text-neutral-300 hover:text-secondary-500 transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center text-neutral-300 hover:text-secondary-500 transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-secondary-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  Corporate Office, 123 Business Park,<br />
                  MG Road, Mumbai 400001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">info@hindustanbawa.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 text-neutral-800 rounded-l focus:outline-none" 
                />
                <button 
                  type="submit" 
                  className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-r transition-colors duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
            <p className="text-xs text-neutral-400">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hindustan Bawa Builders. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-neutral-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;