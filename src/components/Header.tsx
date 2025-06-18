import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            LinguaLearn
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/quizzes" className="text-gray-700 hover:text-blue-600 transition-colors">
              Quizzes
            </Link>
            <a href="#classes" className="text-gray-700 hover:text-blue-600 transition-colors">
              Classes
            </a>
            <a href="#teachers" className="text-gray-700 hover:text-blue-600 transition-colors">
              Teachers
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
