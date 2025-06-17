
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClassSchedule = () => {
  const upcomingClasses = [
    {
      id: 1,
      title: 'English Conversation Practice',
      teacher: 'Sarah Johnson',
      time: '10:00 AM',
      date: 'Today',
      level: 'Intermediate',
      spots: 3,
      total: 12
    },
    {
      id: 2,
      title: 'Spanish Grammar Intensive',
      teacher: 'Carlos Rodriguez',
      time: '2:00 PM',
      date: 'Today',
      level: 'Beginner',
      spots: 5,
      total: 15
    },
    {
      id: 3,
      title: 'French Culture & Language',
      teacher: 'Marie Dubois',
      time: '4:30 PM',
      date: 'Tomorrow',
      level: 'Advanced',
      spots: 2,
      total: 10
    },
    {
      id: 4,
      title: 'German Business Language',
      teacher: 'Hans Mueller',
      time: '11:00 AM',
      date: 'Tomorrow',
      level: 'Intermediate',
      spots: 7,
      total: 12
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Classes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join live interactive sessions with expert teachers and fellow students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {upcomingClasses.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                        {classItem.title}
                      </CardTitle>
                      <div className="text-sm text-gray-600">
                        with {classItem.teacher}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {classItem.time}
                      </div>
                      <div className="text-sm text-gray-600">
                        {classItem.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      classItem.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      classItem.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {classItem.level}
                    </span>
                    <div className="text-sm text-gray-600">
                      {classItem.spots} spots left of {classItem.total}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((classItem.total - classItem.spots) / classItem.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    disabled={classItem.spots === 0}
                  >
                    {classItem.spots === 0 ? 'Class Full' : 'Reserve Spot'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View Full Schedule
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassSchedule;
