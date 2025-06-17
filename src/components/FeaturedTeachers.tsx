
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Teacher {
  id: number;
  name: string;
  language: string;
  specialization: string;
  experience: string;
  image: string;
  rating: number;
}

interface FeaturedTeachersProps {
  teachers?: Teacher[];
}

const FeaturedTeachers: React.FC<FeaturedTeachersProps> = ({ teachers = [] }) => {
  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from Expert Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified instructors bring years of experience and passion 
            to help you achieve your language learning goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      ⭐ {teacher.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <div className="text-blue-600 font-medium">
                    {teacher.language} Teacher
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium text-gray-900 mr-2">Specialization:</span>
                      {teacher.specialization}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium text-gray-900 mr-2">Experience:</span>
                      {teacher.experience}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full">
                      Book a Lesson
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Profile
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
            View All Teachers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTeachers;
