
import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Grid, List, Star, Clock, Users, BookmarkPlus, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QuizCard } from '@/components/QuizCard';
import { QuizFilters } from '@/components/QuizFilters';
import { QuizSearch } from '@/components/QuizSearch';
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

const QuizLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState({
    language: '',
    difficulty: '',
    duration: '',
    topic: ''
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock data - in real app, this would come from API
  const { data: quizzes = [], isLoading } = useQuery({
    queryKey: ['quizzes'],
    queryFn: async () => {
      // Simulate API call
      const mockQuizzes: Quiz[] = [
        {
          id: '1',
          title: 'Spanish Grammar Fundamentals',
          description: 'Master the basics of Spanish grammar with this comprehensive quiz covering verb conjugations, articles, and sentence structure.',
          category: 'grammar',
          language: 'Spanish',
          difficulty: 'beginner',
          duration: 30,
          questionCount: 20,
          completionRate: 85,
          rating: 4.5,
          reviewCount: 128,
          isBookmarked: false,
          thumbnail: '/placeholder.svg',
          tags: ['verbs', 'articles', 'conjugation'],
          createdAt: '2024-01-15',
          popularity: 95
        },
        {
          id: '2',
          title: 'French Vocabulary Building',
          description: 'Expand your French vocabulary with everyday words and phrases used in common conversations.',
          category: 'vocabulary',
          language: 'French',
          difficulty: 'intermediate',
          duration: 25,
          questionCount: 35,
          completionRate: 72,
          rating: 4.2,
          reviewCount: 89,
          isBookmarked: true,
          progress: 60,
          thumbnail: '/placeholder.svg',
          tags: ['conversation', 'daily-life', 'phrases'],
          createdAt: '2024-02-01',
          popularity: 87
        },
        {
          id: '3',
          title: 'German Listening Comprehension',
          description: 'Test your German listening skills with audio clips and comprehension questions.',
          category: 'listening',
          language: 'German',
          difficulty: 'advanced',
          duration: 45,
          questionCount: 15,
          completionRate: 68,
          rating: 4.7,
          reviewCount: 156,
          isBookmarked: false,
          thumbnail: '/placeholder.svg',
          tags: ['audio', 'comprehension', 'native-speakers'],
          createdAt: '2024-01-20',
          popularity: 92
        }
      ];
      return mockQuizzes;
    }
  });

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'grammar', label: 'Grammar' },
    { id: 'vocabulary', label: 'Vocabulary' },
    { id: 'listening', label: 'Listening' },
    { id: 'speaking', label: 'Speaking' },
    { id: 'reading', label: 'Reading' }
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'difficulty', label: 'Difficulty' },
    { value: 'duration', label: 'Duration' },
    { value: 'newest', label: 'Newest First' },
    { value: 'completion', label: 'Completion Rate' }
  ];

  const filteredAndSortedQuizzes = useMemo(() => {
    let filtered = quizzes.filter(quiz => {
      const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           quiz.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           quiz.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
      
      const matchesFilters = 
        (!filters.language || quiz.language === filters.language) &&
        (!filters.difficulty || quiz.difficulty === filters.difficulty) &&
        (!filters.duration || 
          (filters.duration === 'short' && quiz.duration <= 20) ||
          (filters.duration === 'medium' && quiz.duration > 20 && quiz.duration <= 40) ||
          (filters.duration === 'long' && quiz.duration > 40));

      return matchesSearch && matchesCategory && matchesFilters;
    });

    // Sort quizzes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'rating':
          return b.rating - a.rating;
        case 'difficulty':
          const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case 'duration':
          return a.duration - b.duration;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'completion':
          return b.completionRate - a.completionRate;
        default:
          return 0;
      }
    });

    return filtered;
  }, [quizzes, searchTerm, selectedCategory, filters, sortBy]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quizzes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quiz Library</h1>
              <p className="text-gray-600 mt-1">Test your knowledge and track your progress</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 space-y-6">
            <QuizSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <QuizFilters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredAndSortedQuizzes.length} quiz{filteredAndSortedQuizzes.length !== 1 ? 'es' : ''}
              </p>
            </div>

            {/* Quiz Grid/List */}
            <motion.div
              layout
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredAndSortedQuizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <QuizCard quiz={quiz} viewMode={viewMode} />
                </motion.div>
              ))}
            </motion.div>

            {filteredAndSortedQuizzes.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No quizzes found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLibrary;
