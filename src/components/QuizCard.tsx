import React from 'react';
import { Quiz, Difficulty } from '@/lib/quizData'; // Assuming Difficulty type is also exported for color coding
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, HelpCircle, BookOpen, Star, Users } from 'lucide-react';

interface QuizCardProps {
  quiz: Quiz;
}

const difficultyColorMap: Record<Difficulty, string> = {
  Beginner: 'bg-green-500 hover:bg-green-600',
  Intermediate: 'bg-blue-500 hover:bg-blue-600',
  Advanced: 'bg-orange-500 hover:bg-orange-600',
  Expert: 'bg-red-500 hover:bg-red-600',
};

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const averageRating = quiz.studentRatings.length > 0
    ? quiz.studentRatings.reduce((acc, r) => acc + r.rating, 0) / quiz.studentRatings.length
    : 0;

  // Simple star display for average rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar ? '½' : ''}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-800 line-clamp-2">{quiz.title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 pt-1">{quiz.language} - {quiz.topic}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge
            className={`text-white ${difficultyColorMap[quiz.difficulty]}`}
          >
            {quiz.difficulty}
          </Badge>
          <Badge variant="secondary">{quiz.type}</Badge>
        </div>

        <div className="text-sm text-gray-600 space-y-1.5">
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-blue-500" />
            <span>{quiz.durationMinutes} minutes</span>
          </div>
          <div className="flex items-center">
            <HelpCircle size={16} className="mr-2 text-green-500" />
            <span>{quiz.numberOfQuestions} questions</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-purple-500" />
            <span>{quiz.numberOfCompletions} completions</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Star size={16} className="mr-1.5 text-yellow-500" />
          <span>
            {averageRating > 0 ? `${averageRating.toFixed(1)} ${renderStars(averageRating)}` : 'Not rated yet'}
            {quiz.studentRatings.length > 0 && ` (${quiz.studentRatings.length} ratings)`}
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <div className="flex w-full space-x-3">
          <Button variant="outline" className="w-1/2">
            <BookOpen size={16} className="mr-2" />
            Preview
          </Button>
          <Button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white">
            Start Quiz
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
