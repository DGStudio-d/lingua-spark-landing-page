
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

interface SimilarClassesProps {
  currentClassId: string;
}

const SimilarClasses: React.FC<SimilarClassesProps> = ({ currentClassId }) => {
  const similarClasses = [
    {
      id: "spanish-advanced",
      name: "Spanish Conversation Advanced",
      level: "Advanced",
      price: 349,
      duration: "10 weeks",
      rating: 4.9,
      students: 15,
      teacher: "Carlos Rodriguez",
      schedule: "Mon, Wed 6:00 PM"
    },
    {
      id: "spanish-beginner",
      name: "Spanish for Beginners",
      level: "Beginner",
      price: 249,
      duration: "6 weeks",
      rating: 4.7,
      students: 22,
      teacher: "Ana Martinez",
      schedule: "Tue, Thu 7:00 PM"
    },
    {
      id: "spanish-business",
      name: "Business Spanish",
      level: "Intermediate",
      price: 399,
      duration: "8 weeks",
      rating: 4.8,
      students: 12,
      teacher: "María González",
      schedule: "Sat 10:00 AM"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Similar Classes You Might Like
            </h2>
            <p className="text-xl text-gray-600">
              Explore other Spanish classes at different levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarClasses.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant={classItem.level === 'Beginner' ? 'secondary' : 
                                classItem.level === 'Intermediate' ? 'default' : 'destructive'}
                      >
                        {classItem.level}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">${classItem.price}</div>
                        <div className="text-sm text-gray-500">{classItem.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{classItem.name}</CardTitle>
                    <p className="text-gray-600">with {classItem.teacher}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{classItem.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{classItem.students} students</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          <span>{classItem.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full">View Details</Button>
                      <Button variant="outline" className="w-full">Quick Enroll</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarClasses;
