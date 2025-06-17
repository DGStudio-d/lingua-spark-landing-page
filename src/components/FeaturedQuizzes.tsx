
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Quiz {
  id: number;
  title: string;
  language: string;
  difficulty: string;
  questions: number;
  completions: number;
  averageScore: number;
}

interface FeaturedQuizzesProps {
  quizzes?: Quiz[];
}

const FeaturedQuizzes: React.FC<FeaturedQuizzesProps> = ({ quizzes = [] }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
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

  return (
    <section id="quizzes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Challenge yourself with our interactive quizzes designed to reinforce 
            your learning and track your progress
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {quiz.title}
                    </CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="text-blue-600 font-medium">
                    {quiz.language}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-xl text-blue-600">{quiz.questions}</div>
                        <div className="text-gray-600">Questions</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-xl text-green-600">{quiz.averageScore}%</div>
                        <div className="text-gray-600">Avg Score</div>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-gray-600">
                      {quiz.completions.toLocaleString()} students completed
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full group-hover:bg-blue-700 transition-colors">
                      Start Quiz
                    </Button>
                    <Button variant="outline" className="w-full">
                      Preview Questions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Browse All Quizzes
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedQuizzes;
