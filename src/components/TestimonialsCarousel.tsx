
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  review: string;
  language: string;
  course: string;
  date: string;
  country: string;
}

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      // Mock data - replace with actual API call
      const mockTestimonials: Testimonial[] = [
        {
          id: '1',
          name: 'Sarah Johnson',
          photo: '/placeholder.svg',
          rating: 5,
          review: 'LinguaSchool transformed my Spanish learning experience. The interactive quizzes and expert teachers made learning enjoyable and effective. I\'m now confident speaking Spanish in business meetings!',
          language: 'Spanish',
          course: 'Business Spanish Intensive',
          date: '2024-01-15',
          country: 'USA'
        },
        {
          id: '2',
          name: 'Marco Silva',
          photo: '/placeholder.svg',
          rating: 5,
          review: 'The personalized learning approach is incredible. My teacher understood exactly what I needed to improve my French pronunciation. The quiz system tracked my progress perfectly.',
          language: 'French',
          course: 'French Conversation Mastery',
          date: '2024-02-03',
          country: 'Brazil'
        },
        {
          id: '3',
          name: 'Aisha Patel',
          photo: '/placeholder.svg',
          rating: 5,
          review: 'I passed my JLPT N2 exam thanks to LinguaSchool! The structured curriculum and adaptive quizzes helped me identify and improve my weak areas systematically.',
          language: 'Japanese',
          course: 'JLPT Preparation N2',
          date: '2024-01-28',
          country: 'India'
        },
        {
          id: '4',
          name: 'Thomas Mueller',
          photo: '/placeholder.svg',
          rating: 5,
          review: 'Excellent platform for language learning. The combination of live classes and interactive quizzes created the perfect learning environment for me to master Italian.',
          language: 'Italian',
          course: 'Italian Complete Course',
          date: '2024-02-10',
          country: 'Germany'
        },
        {
          id: '5',
          name: 'Emily Chen',
          photo: '/placeholder.svg',
          rating: 5,
          review: 'The quiz system is amazing! It adapts to my learning pace and helps me practice exactly what I need. My German improved dramatically in just 3 months.',
          language: 'German',
          course: 'German for Professionals',
          date: '2024-01-22',
          country: 'Canada'
        }
      ];
      
      return mockTestimonials;
    }
  });

  // Auto-advance carousel
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied students who have achieved their language learning goals with LinguaSchool.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {currentTestimonial && (
                  <motion.div
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="text-center space-y-6"
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < currentTestimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
                      "{currentTestimonial.review}"
                    </blockquote>

                    {/* Student Info */}
                    <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
                      <img
                        src={currentTestimonial.photo}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      
                      <div className="text-center lg:text-left">
                        <div className="font-semibold text-lg text-gray-900">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {currentTestimonial.course} • {currentTestimonial.country}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
