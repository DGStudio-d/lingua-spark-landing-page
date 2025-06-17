
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">LinguaSpark</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#languages" className="text-gray-700 hover:text-blue-600 transition-colors">Languages</a>
            <a href="#teachers" className="text-gray-700 hover:text-blue-600 transition-colors">Teachers</a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">Schedule</a>
            <a href="#quizzes" className="text-gray-700 hover:text-blue-600 transition-colors">Quizzes</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
            <Button>Start Learning</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-full h-0.5 bg-gray-600 block"></span>
              <span className="w-full h-0.5 bg-gray-600 block"></span>
              <span className="w-full h-0.5 bg-gray-600 block"></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#languages" className="text-gray-700 hover:text-blue-600 transition-colors">Languages</a>
              <a href="#teachers" className="text-gray-700 hover:text-blue-600 transition-colors">Teachers</a>
              <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">Schedule</a>
              <a href="#quizzes" className="text-gray-700 hover:text-blue-600 transition-colors">Quizzes</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="sm" onClick={() => navigate('/login')}>Login</Button>
                <Button size="sm">Start Learning</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
