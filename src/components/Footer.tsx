
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">LinguaSpark</h3>
            <p className="text-gray-300 mb-4">
              Empowering global communication through expert language education. 
              Join thousands of students on their journey to fluency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📘</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📷</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">💼</a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Teachers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Course Catalog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Languages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">English Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Spanish Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">French Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">German Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Languages</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Issues</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 LinguaSpark. All rights reserved. Made with ❤️ for language learners worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
