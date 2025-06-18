import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, BookmarkPlus, Bookmark, Play, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  questionCount: number;
  completionRate: number;
  rating: number;
  reviewCount: number;
  isBookmarked: boolean;
  progress?: number;
  thumbnail: string;
  tags: string[];
  createdAt: string;
  popularity: number;
}

interface QuizCardProps {
  quiz: Quiz;
  viewMode: 'grid' | 'list';
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, viewMode }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle bookmark toggle
    console.log('Toggle bookmark for quiz:', quiz.id);
  };

  const handleQuickStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle quick start
    console.log('Quick start quiz:', quiz.id);
  };

  const handleCardClick = () => {
    // Navigate to quiz detail page
    console.log('Navigate to quiz detail:', quiz.id);
  };

  if (viewMode === 'list') {
    return (
      <motion.div whileHover={{ y: -2 }} className="group">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-md"
          onClick={handleCardClick}
        >
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-48 flex-shrink-0">
                <img
                  src={quiz.thumbnail}
                  alt={quiz.title}
                  className="w-full h-32 lg:h-24 object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{quiz.description}</p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBookmark}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    {quiz.isBookmarked ? (
                      <Bookmark className="h-4 w-4 fill-current" />
                    ) : (
                      <BookmarkPlus className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{quiz.rating}</span>
                    <span>({quiz.reviewCount})</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{quiz.duration} min</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{quiz.completionRate}% completion</span>
                  </div>
                  
                  <Badge className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty}
                  </Badge>
                  
                  <Badge variant="outline">{quiz.language}</Badge>
                </div>

                {quiz.progress !== undefined && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{quiz.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${quiz.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1">
                    {quiz.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button onClick={handleQuickStart} className="ml-auto">
                    <Play className="h-4 w-4 mr-2" />
                    Start Quiz
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ y: -5 }} className="group">
      <Card 
        className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full"
        onClick={handleCardClick}
      >
        <div className="relative">
          <img
            src={quiz.thumbnail}
            alt={quiz.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-blue-600"
          >
            {quiz.isBookmarked ? (
              <Bookmark className="h-4 w-4 fill-current" />
            ) : (
              <BookmarkPlus className="h-4 w-4" />
            )}
          </Button>

          {quiz.progress !== undefined && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span className="font-medium">{quiz.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: `${quiz.progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
              {quiz.title}
            </CardTitle>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge className={getDifficultyColor(quiz.difficulty)}>
              {quiz.difficulty}
            </Badge>
            <Badge variant="outline">{quiz.language}</Badge>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          <p className="text-sm text-gray-600 line-clamp-3">{quiz.description}</p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="h-4 w-4" />
              <span>{quiz.duration} min</span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-600">
              <BarChart3 className="h-4 w-4" />
              <span>{quiz.questionCount} questions</span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-600">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{quiz.rating}</span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-600">
              <Users className="h-4 w-4" />
              <span>{quiz.completionRate}%</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {quiz.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {quiz.tags.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{quiz.tags.length - 2}
              </Badge>
            )}
          </div>

          <Button 
            onClick={handleQuickStart}
            className="w-full group-hover:bg-blue-700 transition-colors"
          >
            <Play className="h-4 w-4 mr-2" />
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
