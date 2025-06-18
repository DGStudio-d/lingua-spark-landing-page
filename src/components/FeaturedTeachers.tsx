
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MessageCircle, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Teacher {
  id: string;
  name: string;
  photo: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  experience: string;
  languages: string[];
  isOnline: boolean;
  nextAvailable: string;
}

export const FeaturedTeachers = () => {
  const { data: teachers = [], isLoading } = useQuery({
    queryKey: ['featured-teachers'],
    queryFn: async () => {
      // Mock data - replace with actual API call
      const mockTeachers: Teacher[] = [
        {
          id: '1',
          name: 'Maria Rodriguez',
          photo: '/placeholder.svg',
          specializations: ['Spanish Grammar', 'Business Spanish', 'DELE Preparation'],
          rating: 4.9,
          reviewCount: 234,
          experience: '8 years',
          languages: ['Spanish', 'English'],
          isOnline: true,
          nextAvailable: 'Today at 2:00 PM'
        },
        {
          id: '2',
          name: 'Jean-Pierre Dubois',
          photo: '/placeholder.svg',
          specializations: ['French Literature', 'Conversation', 'DELF/DALF'],
          rating: 4.8,
          reviewCount: 189,
          experience: '12 years',
          languages: ['French', 'English'],
          isOnline: false,
          nextAvailable: 'Tomorrow at 10:00 AM'
        },
        {
          id: '3',
          name: 'Klaus Weber',
          photo: '/placeholder.svg',
          specializations: ['German Business', 'Technical German', 'Goethe Exam'],
          rating: 4.9,
          reviewCount: 156,
          experience: '10 years',
          languages: ['German', 'English'],
          isOnline: true,
          nextAvailable: 'Today at 4:30 PM'
        },
        {
          id: '4',
          name: 'Yuki Tanaka',
          photo: '/placeholder.svg',
          specializations: ['Japanese Culture', 'JLPT Preparation', 'Anime Japanese'],
          rating: 5.0,
          reviewCount: 142,
          experience: '6 years',
          languages: ['Japanese', 'English'],
          isOnline: true,
          nextAvailable: 'Today at 1:00 PM'
        }
      ];
      
      return mockTeachers;
    }
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from certified native speakers and experienced educators who are passionate 
            about helping you achieve your language goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  {/* Profile Photo */}
                  <div className="relative">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className={`absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full border-2 border-white ${teacher.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>

                  {/* Name and Rating */}
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      {teacher.name}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{teacher.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{teacher.reviewCount} reviews</span>
                    </div>
                  </div>

                  {/* Experience and Languages */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      <span>{teacher.experience} experience</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 justify-center">
                      {teacher.languages.map(lang => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Specializations:</div>
                    <div className="flex flex-wrap gap-1">
                      {teacher.specializations.slice(0, 2).map(spec => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                      {teacher.specializations.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{teacher.specializations.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{teacher.nextAvailable}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      View Profile
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Teachers
          </Button>
        </div>
      </div>
    </section>
  );
};
