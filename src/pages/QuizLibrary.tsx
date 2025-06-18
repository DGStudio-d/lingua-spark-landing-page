import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuizCard from '@/components/QuizCard';
import { mockQuizzes, Quiz, QuizType } from '@/lib/quizData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListFilter, ArrowDownUp } from 'lucide-react'; // Icons for filter/sort

const quizCategories: Array<'All' | QuizType> = ['All', 'Vocabulary', 'Grammar', 'Listening', 'Reading', 'Culture', 'Mixed'];

const sortOptions = [
  { value: 'popularity', label: 'Popularity (Completions)' },
  { value: 'difficulty_asc', label: 'Difficulty: Low to High' },
  { value: 'difficulty_desc', label: 'Difficulty: High to Low' },
  { value: 'dateCreated_desc', label: 'Newest First' },
  { value: 'dateCreated_asc', label: 'Oldest First' },
  { value: 'averageScore_desc', label: 'Average Score: High to Low' },
];

const QuizLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | QuizType>('All');
  // Placeholder state for selected sort option, will be used later
  // const [selectedSort, setSelectedSort] = React.useState<string>('popularity');

  const filteredQuizzes = useMemo(() => {
    if (selectedCategory === 'All') {
      return mockQuizzes;
    }
    return mockQuizzes.filter((quiz) => quiz.type === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
          Explore Our Quizzes
        </h1>
        <p className="mb-10 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Find the perfect quiz to boost your language skills. Filter by category and sort to your preference.
        </p>

        <Tabs
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as 'All' | QuizType)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-7 mb-6 bg-blue-100/60 p-2 rounded-lg shadow-sm">
            {quizCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="py-2.5 text-sm font-medium text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200 ease-in-out hover:bg-blue-200"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Placeholder for future filter button/modal */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors shadow-sm">
              <ListFilter size={18} />
              <span>Filters</span>
            </button>

            <Select
              // onValueChange={setSelectedSort} // Will be enabled later
              // defaultValue="popularity" // Or manage with state
            >
              <SelectTrigger className="w-full sm:w-[280px] bg-white shadow-sm border-gray-300">
                <ArrowDownUp size={16} className="mr-2 text-gray-500" />
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {quizCategories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              {/* The grid now uses filteredQuizzes. It will be the same for all TabContent panels
                   but only the active one is shown. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredQuizzes.map((quiz: Quiz) => (
                  <QuizCard key={`${category}-${quiz.id}`} quiz={quiz} />
                ))}
                {filteredQuizzes.length === 0 && (
                  <div className="col-span-full text-center text-gray-500 py-10">
                    No quizzes found for the selected category.
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default QuizLibrary;
