
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Language {
  id: number;
  name: string;
  flag: string;
  description: string;
  students: number;
}

interface LanguageCardsProps {
  languages?: Language[];
}

const LanguageCards: React.FC<LanguageCardsProps> = ({ languages = [] }) => {
  return (
    <section id="languages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Language Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive language programs designed by experts 
            to take you from beginner to fluent speaker
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {language.flag}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {language.name}
                  </CardTitle>
                  <div className="text-sm text-blue-600 font-medium">
                    {language.students.toLocaleString()} students enrolled
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 text-center leading-relaxed">
                    {language.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <Button className="w-full group-hover:bg-blue-700 transition-colors">
                      Start Learning {language.name}
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Course Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageCards;
