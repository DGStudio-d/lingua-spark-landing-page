
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Award, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const languages = [
  { id: 'spanish', name: 'Spanish', flag: '🇪🇸', color: 'from-red-500 to-yellow-500' },
  { id: 'french', name: 'French', flag: '🇫🇷', color: 'from-blue-500 to-red-500' },
  { id: 'german', name: 'German', flag: '🇩🇪', color: 'from-gray-800 to-red-600' },
  { id: 'italian', name: 'Italian', flag: '🇮🇹', color: 'from-green-500 to-red-500' },
  { id: 'japanese', name: 'Japanese', flag: '🇯🇵', color: 'from-red-600 to-white' },
  { id: 'chinese', name: 'Chinese', flag: '🇨🇳', color: 'from-red-600 to-yellow-400' }
];

const levels = [
  { id: 'a1', name: 'A1 - Beginner', description: 'Basic words and phrases' },
  { id: 'a2', name: 'A2 - Elementary', description: 'Simple conversations' },
  { id: 'b1', name: 'B1 - Intermediate', description: 'Clear communication' },
  { id: 'b2', name: 'B2 - Upper Intermediate', description: 'Fluent discussions' },
  { id: 'c1', name: 'C1 - Advanced', description: 'Complex texts and ideas' },
  { id: 'c2', name: 'C2 - Proficient', description: 'Native-like fluency' }
];

export const LevelAssessment = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [hoveredLevel, setHoveredLevel] = useState<string>('');

  const features = [
    { icon: Clock, text: 'Takes only 15 minutes' },
    { icon: CheckCircle, text: 'Accurate level assessment' },
    { icon: Award, text: 'Personalized learning plan' },
    { icon: Users, text: 'Used by 50,000+ students' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Starting Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take our free assessment quiz to discover your current language level and get personalized 
            recommendations for your learning journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Assessment Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    Free Language Assessment
                  </CardTitle>
                  <p className="text-gray-600">
                    Choose a language and discover your level
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Language Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Language to Assess
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {languages.map((language) => (
                        <button
                          key={language.id}
                          onClick={() => setSelectedLanguage(language.id)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedLanguage === language.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{language.flag}</span>
                            <span className="font-medium text-sm">{language.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <Icon className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Start Button */}
                  <Button 
                    className="w-full h-12 text-lg"
                    disabled={!selectedLanguage}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Free Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    No registration required • Instant results • Completely free
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Level Guide */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Language Proficiency Levels
                </h3>
                <p className="text-gray-600 mb-6">
                  Our assessments follow the Common European Framework of Reference (CEFR) 
                  standards to accurately measure your language abilities.
                </p>
              </div>

              <div className="space-y-3">
                {levels.map((level, index) => (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredLevel(level.id)}
                    onMouseLeave={() => setHoveredLevel('')}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      hoveredLevel === level.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{level.name}</div>
                        <div className="text-sm text-gray-600">{level.description}</div>
                      </div>
                      <Badge 
                        variant={hoveredLevel === level.id ? 'default' : 'secondary'}
                        className="ml-4"
                      >
                        {level.id.toUpperCase()}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Get Your Results Instantly</h4>
                <p className="text-sm opacity-90">
                  After completing the assessment, you'll receive a detailed report with your 
                  proficiency level, strengths, areas for improvement, and personalized course recommendations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
