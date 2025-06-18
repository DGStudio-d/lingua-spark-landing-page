
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Language {
  id: string;
  name: string;
  flag: string;
  description: string;
  studentCount: number;
  difficultyLevel: string;
  estimatedTime: string;
  color: string;
}

export const LanguageCards = () => {
  const { data: languages = [], isLoading } = useQuery({
    queryKey: ['languages'],
    queryFn: async () => {
      // Mock data - replace with actual API call
      const mockLanguages: Language[] = [
        {
          id: '1',
          name: 'Spanish',
          flag: '🇪🇸',
          description: 'Learn the world\'s second most spoken language with our comprehensive Spanish program.',
          studentCount: 12450,
          difficultyLevel: 'Beginner',
          estimatedTime: '6 months',
          color: 'from-red-500 to-yellow-500'
        },
        {
          id: '2',
          name: 'French',
          flag: '🇫🇷',
          description: 'Master the language of love and culture with our interactive French courses.',
          studentCount: 8920,
          difficultyLevel: 'Intermediate',
          estimatedTime: '8 months',
          color: 'from-blue-500 to-red-500'
        },
        {
          id: '3',
          name: 'German',
          flag: '🇩🇪',
          description: 'Unlock opportunities in Europe with our structured German language program.',
          studentCount: 6780,
          difficultyLevel: 'Intermediate',
          estimatedTime: '10 months',
          color: 'from-gray-800 to-red-600'
        },
        {
          id: '4',
          name: 'Italian',
          flag: '🇮🇹',
          description: 'Discover the beauty of Italian language and culture through immersive learning.',
          studentCount: 5640,
          difficultyLevel: 'Beginner',
          estimatedTime: '7 months',
          color: 'from-green-500 to-red-500'
        },
        {
          id: '5',
          name: 'Japanese',
          flag: '🇯🇵',
          description: 'Explore Japanese language from basics to advanced conversation skills.',
          studentCount: 9340,
          difficultyLevel: 'Advanced',
          estimatedTime: '12 months',
          color: 'from-red-600 to-white'
        },
        {
          id: '6',
          name: 'Chinese',
          flag: '🇨🇳',
          description: 'Learn Mandarin Chinese and open doors to the world\'s largest market.',
          studentCount: 7820,
          difficultyLevel: 'Advanced',
          estimatedTime: '14 months',
          color: 'from-red-600 to-yellow-400'
        }
      ];
      
      return mockLanguages;
    }
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Language Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive language programs designed for all skill levels. 
            Each course includes interactive lessons, expert teachers, and personalized quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className={`w-full h-32 bg-gradient-to-r ${language.color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-6xl">{language.flag}</span>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {language.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{language.studentCount.toLocaleString()} students</span>
                    </div>
                    <Badge variant="secondary">
                      {language.difficultyLevel}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Estimated completion: {language.estimatedTime}</span>
                  </div>
                  
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Languages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
