
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Play, Brain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FeaturedQuiz {
  id: string;
  title: string;
  description: string;
  language: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  completions: number;
  rating: number;
  category: string;
  thumbnail: string;
}

export const FeaturedQuizzes = () => {
  const { data: quizzes = [], isLoading } = useQuery({
    queryKey: ['featured-quizzes'],
    queryFn: async () => {
      // Mock data - replace with actual API call
      const mockQuizzes: FeaturedQuiz[] = [
        {
          id: '1',
          title: 'Spanish Grammar Essentials',
          description: 'Master fundamental Spanish grammar rules with interactive exercises and immediate feedback.',
          language: 'Spanish',
          difficulty: 'Beginner',
          duration: 15,
          completions: 3240,
          rating: 4.8,
          category: 'Grammar',
          thumbnail: '/placeholder.svg'
        },
        {
          id: '2',
          title: 'French Vocabulary Builder',
          description: 'Expand your French vocabulary with everyday words and phrases used in real conversations.',
          language: 'French',
          difficulty: 'Intermediate',
          duration: 20,
          completions: 2180,
          rating: 4.9,
          category: 'Vocabulary',
          thumbnail: '/placeholder.svg'
        },
        {
          id: '3',
          title: 'German Listening Challenge',
          description: 'Test your German listening skills with authentic audio clips and comprehension questions.',
          language: 'German',
          difficulty: 'Advanced',
          duration: 25,
          completions: 1560,
          rating: 4.7,
          category: 'Listening',
          thumbnail: '/placeholder.svg'
        },
        {
          id: '4',
          title: 'Japanese Writing Practice',
          description: 'Practice Hiragana, Katakana, and basic Kanji with guided writing exercises.',
          language: 'Japanese',
          difficulty: 'Beginner',
          duration: 30,
          completions: 2890,
          rating: 4.8,
          category: 'Writing',
          thumbnail: '/placeholder.svg'
        }
      ];
      
      return mockQuizzes;
    }
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
              <div key={i} className="h-80 bg-gray-200 rounded-lg animate-pulse"></div>
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
            Featured Language Quizzes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your knowledge and track your progress with our interactive quizzes. 
            Designed by language experts to help you learn effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="relative mb-4">
                    <img
                      src={quiz.thumbnail}
                      alt={quiz.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary">
                        {quiz.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                    {quiz.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {quiz.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{quiz.duration} min</span>
                      </div>
                      <Badge variant="outline">{quiz.language}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>{quiz.completions.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{quiz.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    <Play className="h-4 w-4 mr-2" />
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            Ready to challenge yourself with more quizzes?
          </p>
          <Link to="/quizzes">
            <Button size="lg" variant="outline">
              <Brain className="mr-2 h-5 w-5" />
              Explore Quiz Library
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
