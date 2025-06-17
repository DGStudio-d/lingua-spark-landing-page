
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LevelAssessment = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese'];
  
  const levels = [
    { code: 'A1', name: 'Beginner', description: 'Can understand and use familiar everyday expressions' },
    { code: 'A2', name: 'Elementary', description: 'Can communicate in simple and routine tasks' },
    { code: 'B1', name: 'Intermediate', description: 'Can deal with most situations while traveling' },
    { code: 'B2', name: 'Upper-Intermediate', description: 'Can interact with a degree of fluency' },
    { code: 'C1', name: 'Advanced', description: 'Can express ideas fluently and spontaneously' },
    { code: 'C2', name: 'Proficient', description: 'Can understand virtually everything with ease' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Your Language Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take our comprehensive assessment to find the perfect starting point 
            for your language learning journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
                <CardHeader className="text-center p-0">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Free Language Level Assessment
                  </CardTitle>
                  <p className="text-blue-100 text-lg">
                    Personalized evaluation in just 15 minutes
                  </p>
                </CardHeader>
              </div>

              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Select Language to Test:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => setSelectedLanguage(language)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedLanguage === language
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    European Framework Reference Levels:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {levels.map((level, index) => (
                      <motion.div
                        key={level.code}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                      >
                        <div className="flex-shrink-0">
                          <span className={`inline-block w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center ${
                            level.code.startsWith('A') ? 'bg-green-500' :
                            level.code.startsWith('B') ? 'bg-yellow-500' : 'bg-red-500'
                          }`}>
                            {level.code}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{level.name}</div>
                          <div className="text-sm text-gray-600">{level.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600">⏱️</span>
                      <span>15-20 minutes</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600">📊</span>
                      <span>Instant results</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600">🎯</span>
                      <span>Personalized recommendations</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="text-lg px-8 py-4">
                    Start {selectedLanguage} Assessment
                  </Button>
                  
                  <p className="text-sm text-gray-500">
                    No registration required • Completely free
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LevelAssessment;
