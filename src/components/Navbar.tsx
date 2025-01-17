import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Teacode
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-pink-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-pink-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors ${
                isActive('/blogs') ? 'text-pink-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-pink-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-pink-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;