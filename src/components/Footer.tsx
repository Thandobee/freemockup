
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                M
              </div>
              <span className="text-2xl font-bold">MockupHub</span>
            </Link>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Your go-to destination for high-quality, free mockups. 
              Perfect for designers, developers, and creative professionals worldwide.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                Stay Updated
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-l-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-xl transition-all duration-200 font-semibold flex items-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Popular Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/devices" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Device Mockups
                </Link>
              </li>
              <li>
                <Link to="/category/packaging" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Packaging
                </Link>
              </li>
              <li>
                <Link to="/category/branding" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/category/apparel" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Apparel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © 2024 MockupHub. Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> for designers worldwide.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
