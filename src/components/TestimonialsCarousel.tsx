
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  course: string;
  rating: number;
  text: string;
  image: string;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real success stories from students who transformed their lives through language learning
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic font-medium leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <img 
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-blue-600 font-medium">
                          {testimonials[currentIndex].course}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
