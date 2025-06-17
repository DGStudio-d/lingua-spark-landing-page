
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Any Language 
              <span className="text-blue-600"> Faster Than Ever</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join thousands of students learning with our proven methodology. 
              Expert teachers, interactive lessons, and personalized learning paths 
              that adapt to your pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Take Level Test
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-semibold text-blue-600 text-2xl mr-2">6+</span>
                Languages Available
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-blue-600 text-2xl mr-2">5000+</span>
                Happy Students
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-blue-600 text-2xl mr-2">98%</span>
                Success Rate
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Students learning languages"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl -z-10"></div>
            
            {/* Floating achievement cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  🎯
                </div>
                <div>
                  <div className="font-semibold text-sm">Goal Achieved!</div>
                  <div className="text-xs text-gray-600">B2 Level Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <div className="font-semibold text-sm">Streak Record!</div>
                  <div className="text-xs text-gray-600">30 Days Active</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
